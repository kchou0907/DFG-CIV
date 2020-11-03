<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Suppliers_model extends CI_Model {
    /**
     * private table/query/database for suppliers
    */
    protected $table = "suppliers";
    /**
     * Insert data within the table for suppliers
     * @param Array $data - array that has data for datbase
     * @return boolean that states whether job was completed
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
     * finds the row that fullfills specifications
     * @param Array/String $where - row of specficated data
     * @return Array that tells the row of specfied data
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
     * returns the rows of login information
     * @param Array/String $where - location of the row of login
     * @param Array/String $orWhere - location of row of login
     * @return Array - Array with specfied row for information
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
     * gets all of the rows in query
     *@param null
     * @return Array - array with all the rows of query
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
     * shows a limited amount of rows from query
     * @param int $nbre - rows to loimit results to
     * @param int $base = 0 - rows to skip over
     * @return Array - array with the desired number of rows specified
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
     * updates query with data at location
     * @param Array $data - array that hold data to be updated
     * @param Array/String $where - location of where to be updated
     * @returns boolean - true if sucessfully updated
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
     * deletes row from query
     * @param Array/String $where - location of row 
     * @return boolean - true if sucessfully deleted
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
     * counts all the rows within query with matching data
     * @param Array $data = null - desired data to be matched
     * @return int - the number of rows with desired data
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
