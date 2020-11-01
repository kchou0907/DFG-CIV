<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Officers_model extends CI_Model {

    /**
     * Data table for class manipulation
     */
    protected $table = "officers";

    /**
     * Inserts data in the officers table
     *
     * @param Array $data - the data to be inserted into the database
     * @return Boolean indicating success of insertion
     */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    /**
     * Finds and returns data and rows with desired association
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired association
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
     * Returns certain rows of login information
     *
     * @param Array or String $where - Associative array or custom string
     * @param Array or String $orWhere - Associative array or custom string
     * @return Array containing rows with desired association
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
     * Returns all rows in officers table
     * 
     * @return Array of all rows 
     */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->get()
                        ->result();
    }

    /**
     * Displays a certain number rows in table
     *
     * @param Integer $nbre - number of rows to limit the results to
     * @param Integer $base - number of rows to skip
     * @return Array with the desired number of rows returned by the query
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
     * Modifies records in table 
     *
     * @param Array $data - Data for the new table
     * @param Array or string $where - Associative array or custom string
     * @return Boolean indicating success of update
     */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }

    /**
     * Deletes all rows with desired association
     *
     * @param Array or String $where - Associative array or custom string of rows to be deleted
     * @return Boolean indication success of deletion 
     */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }

    /**
     * Counts the number of rows with desired association  
     *
     * @param Array $data - desired value
     * @return Integer num rows 
     */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
