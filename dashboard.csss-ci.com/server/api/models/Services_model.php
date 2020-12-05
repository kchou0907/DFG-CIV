<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Services_model extends CI_Model {
    
    protected $table = "services";
    /**
     * Inserts data into the services table
     * @param Array $data - the data to be inserted into services model
     * @return boolean - boolean that returns true if data is inserted correctly, false if unsucessful
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * finds the row that fulfills the condition
     * @param Array/String $where - Condition to be matched
     * @return Array - returns an Array with the rows that match the specfication
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
     * shows a specified number of rows (top-down) 
     * @param int $nbre - number of rows to be limited to
     * @param $base=0 - number of rows to be skipped 
     * @return Array - array containing the specified number of rows
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
     * @param Array $data - an array with data to be updated with
     * @param Array/String $where - Condition to be matched
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
     * @param Array $data - an array with data to be matched
     * @return int - number of rows with the specified data 
     */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}

