<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Bankers_model extends CI_Model {

    protected $table = "bankers";

    /**
     * Inserts data into the bankers table
     * @param Array $data - the data to be inserted into bankers model
     * @return boolean - boolean that returns true if data is inserted correctly, false if unsucessful
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * Retrieves all banker instances that fulfil a particular condition
     * @param Array/String $where - Where condition that will filter the bankers query
     * @return Array - Returns an array of all bankers that fulfill the where condition
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('banks', 'banks.idbank = ' . $this->table . '.bankId')
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
     * Retrieves all banker instances that fulfil one of two conditions
     * @param Array $where - Where condition that will filter the bankers data being returned
     * @param Array $or_where - Another where condition that will filter the bankers data being returned
     * @return Array - Returns an array of all bankers that fulfill either the where or the or_where conditions
    */
    public function login($where, $orWhere) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('banks', 'banks.idbank = ' . $this->table . '.bankId')
                        ->where($where)
                        ->or_where($orWhere)
                        ->get()
                        ->result();
    }
    /**
     * Retrieves all rows from the bankers table
     * @return Array - An array of all bankers in the bankers table
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('banks', 'banks.idbank = ' . $this->table . '.bankId')
                        ->get()
                        ->result();
    }
    /**
     * shows a specified number of banker rows from the top down
     * @param int $nbre - number of rows to be limited to
     * @param $base=0 - number of rows to be skipped, defaults to 0
     * @return Array - array containing the specified number of bankers
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('banks', 'banks.idbank = ' . $this->table . '.bankId')
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }
    /**
     * update the bankers that fulfill a criteria
     * @param Array/String $data - banker attributes that we are updating the bankers to
     * @param Array/String $where - the condition that filters what subset of banker will be updated
     * @return boolean - a boolean that returns true if the data sucessfully updated,
     *                     false if a problem arose during update
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
     * deletes the bankers specified by the $where clause
     * @param Array/String $where - the condition that filters what subset of banker will be updated
     * @return boolean - a boolean that returns true if the data sucessfully deleted,
     *                     false if a problem arose during delete
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
     * Return a count of the bankers specified by the $where clause
     * @param Array/String $where - the condition that filters what subset of banker that are to be counted
     * @return integer - an integer matching the number of bankers fulfilling this criteria
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
