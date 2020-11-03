<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Townhalls_model extends CI_Model {
    /**
     * private table/query/database for usage - referenced to Townhall
    */
    protected $table = "townHalls";

    /**
     * inserts data into complaints table
     * @param Array $data - data/array that is inputed into the database
     * @return boolean - states whether Array was inserted or not
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * finds the row within database that has data specified
     * @param Array/String $where - field/parameter of the location to compare data to
     * @return Array - which shows the row which has specifications
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
     * returns every row from the database
     * @param null
     * @return Array - array of all the rows from query
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->get()
                        ->result();
    }
    /**
     * displays the number of rows of query
     * @param int $nbre - number of rows to limite results to
     * @param int $base = 0 - number of rows to skip
     * @return Array - rows specificed to show from query
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }
    /**
     * modifies data within query
     * @param Array $data - data for updating
     * @param int $where - location/row of the data being updated
     * @return boolean - true if sucessfully updated
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
     * deletes specfied rows
     * @param int $where - row of specfied data
     * @return boolean - true if row is sucessfully deleted
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
     * count the rows for specfied data 
     * @param Array $data = null - data of which rows to be counted for
     * @return int - total number of rows in query
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
