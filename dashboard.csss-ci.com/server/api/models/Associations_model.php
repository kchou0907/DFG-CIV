<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Associations_model extends CI_Model {

    protected $table = "associations";

    /**
     * Inserts data into the associations table
     * @param Array $data - the data to be inserted into associations model
     * @return boolean - boolean that returns true if data is inserted correctly, false if unsucessful
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * Retrieves all association instances that fulfil a particular condition
     * @param Array/String $where - Where condition that will filter the associations query
     * @return Array - Returns an array of all associations that fulfill the where condition
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
     * Retrieves all association instances that fulfil one of two conditions
     * @param Array $where - Where condition that will filter the associations data being returned
     * @param Array $or_where - Another where condition that will filter the associations data being returned
     * @return Array - Returns an array of all associations that fulfill either the where or the or_where conditions
    */
    public function login($where, $orWhere) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->where($where)
                        ->or_where($orWhere)
                        ->get()
                        ->result();
    }
    /**
     * Retrieves all rows from the associations table
     * @return Array - An array of all associations in the associations table
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->get()
                        ->result();
    }
    /**
     * Return all associations that are connected to a receipt, email or association string
     * @param String $search - A string that matches an association, receipt, or email
     * @return Array/String - All associations that match the string of $search
     *
    */
    public function search($search) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->or_like('association', $search)
                        ->or_like('receipt', $search)
                        ->or_like('email', $search)
                        ->get()
                        ->result();
    }

    /**
     * shows a specified number of association rows
     * @param int $nbre - number of rows to be limited to
     * @param $base=0 - number of rows to be skipped
     * @return Array - array containing the specified number of associations
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }
    /**
     * update the associations that fulfil a criteria
     * @param Array/String $data - association attributes that we are updating the associations to
     * @param Array/String $where - the condition that filters what subset of association will be updated
     * @return boolean - a boolean that returns true if the data sucessfully updated,
     *                     false if a problem arose during update
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
     * deletes the associations specified by the $where claus
     * @param Array/String $where - the condition that filters what subset of association will be updated
     * @return boolean - a boolean that returns true if the data sucessfully deleted,
     *                     false if a problem arose during delete
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
     * Return a count of the associations specified by the $where claus
     * @param Array/String $where - the condition that filters what subset of association that are to be counted
     * @return integer - an integer that represents the number of associations matching this query
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
