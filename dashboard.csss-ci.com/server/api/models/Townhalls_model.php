<?php
/**
checks to see if BASEPATH is defined
*/
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
class that controls Townhall model
extends from CI_Model
*/
class Townhalls_model extends CI_Model {
    //private table for townhall
    protected $table = "townHalls";
    /**
    function for saving data
    @param $data which is array or list
    @returns method insert()
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
    function for finding location of data
    @param $where int type ig of location of data
    @returns method result()
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->where($where)
                        ->get()
                        ->result();
    }
    /**
    function that gets all data 
    @param null
    @return method result()
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->get()
                        ->result();
    }
    /**
    function that shows where data is
    @param $nbre, $base = 0 int type
    @return method result()
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }
    /**
    function that updates data list
    @param $data, $where list/array and int type
    @return method update()
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
    function that deletes data
    @param $where int type
    @return method delete()
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
    function that counts data 
    @param $data = null, list or array type
    @return method count_all()
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
