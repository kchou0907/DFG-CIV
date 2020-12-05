<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Suppliers_model extends CI_Model {

    protected $table = "suppliers";
    /**
     * Inserts data into the suppliers table
     * @param Array $data - the data to be inserted into suppliers model
     * @return boolean - boolean that returns true if data is inserted correctly, false if not
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * finds the row that fulfills the condition
     * @param Array/String $where - Condition to be matched
     * @return Array - returns an Array with the rows that matches the specfications
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->join('services', 'services.idservice = ' . $this->table . '.serviceId')
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
     * gets the rows from the suppliers table that matches the two conditions (meant for login)
     * @param Array/String $where - Condition to be matched
     * @param Array/String $where - Another condition to be matched
     * @return Array - array of all the rows that match the two conditions
    */
    public function login($where, $orWhere) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->join('services', 'services.idservice = ' . $this->table . '.serviceId')
                        ->where($where)
                        ->or_where($orWhere)
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
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->join('services', 'services.idservice = ' . $this->table . '.serviceId')
                        ->get()
                        ->result();
    }
    /**
     * get a certain number of rows(top down)
     * @param int $nbre - number of rows to be limited to
     * @param $base=0 - number of rows to be skipped 
     * @return Array - array containing the specified amount of rows
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->join('services', 'services.idservice = ' . $this->table . '.serviceId')
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
     * @return int - number of rows that have the specified data
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
