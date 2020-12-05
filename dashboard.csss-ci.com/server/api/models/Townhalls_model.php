<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Townhalls_model extends CI_Model {

    protected $table = "townHalls";
    /**
     * Inserts data(new row) into the townHalls table
     * @param Array $data - the data to be inserted into townHalls model
     * @return boolean - boolean that returns true if data is inserted correctly, false if not
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * finds rows that fulfill the condition
     * @param Array/String $where - Condition to be matched
     * @return Array - returns an Array with the rows that match the specfications
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
     * gets all the rows from the townHalls table
     * @return Array - returns an Array with all the rows from townHalls table
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
     * @param Array $data - an array with data the row should be updated with
     * @param Array/String $where - Condition to be matched, rows to be updated
     * @return boolean - returns true if successful, false if not
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
     * deletes a row from the query table
     * @param Array/String $where - Condition to be matched
     * @return BaseBuilder/boolean - return BaseBuilder if sucessful(for method chaining), if failed, returns false
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
     * counts the number of rows in table with a data of a particular value
     * @param Array $data - an array with data vales to be matched
     * @return int - number of rows with that contain the specified data
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
