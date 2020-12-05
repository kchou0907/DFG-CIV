<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Admins_model extends CI_Model {

    protected $table = "admins";

   /**
    * Inserts data into the admins table
    * @param Array $data - the data to be inserted into admins model
    * @return boolean - boolean that returns true if data is inserted correctly, false if unsucessful
   */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
   /**
    * Retrieves all admin instances that fulfil a particular condition
    * @param Array/String $where - Where condition that will filter the admins query
    * @return Array - Returns an array of all Admins that fulfill the where condition
   */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
     * Retrieves all admin instances that fulfil one of two conditions
     * @param Array $where - Where condition that will filter the admins data being returned
     * @param Array $or_where - Another where condition that will filter the admins data being returned
     * @return Array - Returns an array of all Admins that fulfill either the where or the or_where conditions
    */
    public function login($where, $orWhere) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->where($where)
                        ->or_where($orWhere)
                        ->get()
                        ->result();
    }
    /**
     * Retrieves all rows from the Admins table
     * @return Array - An array of all admins in the Admins table
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->get()
                          ->result();
    }
    /**
     * shows a specified number of admin rows from the rop down
     * @param int $nbre - number of rows to be limited to
     * @param $base=0 - number of rows to be skipped, defaults to 0
     * @return Array - array containing the specified number of admins
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }
    /**
     * update the admins that fulfill a criteria
     * @param Array/String $data - admin attributes that we are updating the admins to
     * @param Array/String $where - the condition that filters what subset of admin will be updated
     * @return boolean - a boolean that returns true if the data sucessfully updated,
     *                     false if a problem arose during update
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
     * deletes the admins specified by the $where clause
     * @param Array/String $where - the condition that filters what subset of admin will be updated
     * @return boolean - a boolean that returns true if the data sucessfully deleted,
     *                     false if a problem arose during delete
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
     * Return a count of the admins specified by the $where clause
     * @param Array/String $where - the condition that filters what subset of admin that are to be counted
     * @return integer - an integer matching the number of admins fulfilling this criteria
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
