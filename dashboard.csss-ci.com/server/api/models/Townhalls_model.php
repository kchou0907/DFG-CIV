<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Townhalls_model extends CI_Model {
    /**
     * this a is a private table/database/query use for townHalls model
    */
    protected $table = "townHalls";
    /**
     * Inserts data into the townHalls table
     * @param Array $data - the data to be inserted into townHalls model
     * @return boolean - boolean that returns true if data is inserted correctly, false if not
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * finds the row that fulfills the conditionals
     * @param Array/String $where - Name of the field to compare to
     * @return Array - returns an Array with the rows that matches the specfications
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
     * gets all the rows from the query table
     * @return Array - returns an Array with all the rows from query table
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->get()
                        ->result();
    }
    /**
     * shows a number of rows with constrainst set by parameters(top down)
     * @param int $nbre - number of rows to be limited to
     * @param $base=0 - number of rows to be skipped 
     * @return Array - array containing the number of rows returned with the constraints
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }
    /**
     * updates existing data within query
     * @param Array $data - an array with data to be updated
     * @param Array/String - Name of field to compare to
     * @return boolean - returns true if sucessful, false if not
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
     * deletes a row from the query table
     * @param Array/String $where - Name of field to compare to
     * @return BaseBuilder/boolean - return BaseBuilder if sucessful(for method chaining), if failed, returns false
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
     * counts the number of rows in table with a data of a particular value
     * @param Array $data - an array with data to be matched to
     * @return int - number of rows with data specified
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
