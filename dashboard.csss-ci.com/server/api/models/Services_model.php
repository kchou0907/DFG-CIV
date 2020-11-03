<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Services_model extends CI_Model {
    /**
     * table/database/query for services
    */
    protected $table = "services";
    /**
     * inserts data within the query
     * @param Array $data - data to be inserted
     * @return boolean - true if sucessful
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * finds the row and data of desired location
     * @param Array/String $where - location 
     * @return Array - desired row and data from query
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
     * get all rows from query
     * @param null
     * @return Array - with the number of rows from query
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->get()
                        ->result();
    }
    /**
     * shows the desired rows of data within a limited specfication
     * @param int $nbre - rows to be limited to
     * @param int $base= 0 - rows to skip
     * @return Array - desired rows from query
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }
    /**
     * updates query with new data in a location
     * @param Array $data - data to be updated
     * @param Array/String $where - location/row of the data to be updated
     * @return boolean - if sucessful return true
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
     * deletes row from query
     * @param Array/String $where - location/row of where to delete
     * @return boolean - return treu if sucessfully deleted row
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
     * counts the number of rows where data is
     * @param Array $data = null - data that is specfied to count for in row
     * @return int - number of rows with data
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
