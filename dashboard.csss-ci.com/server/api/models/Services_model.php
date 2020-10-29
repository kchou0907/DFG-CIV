<?php
/**
sees to see if BASEPATH is defined
*/
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
class for a service model that interacts with service part of page
extends from CI_Model
*/
class Services_model extends CI_Model {
    
    //private string var
    protected $table = "services";
    
    /**
    encodes to save data in table
    @param $data pretty sure its a list or array
    @return method insert() 
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
    function finds location of data
    @param $where 
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
    function gets all data
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
    function shows data to user
    @param $nbre, $base = 0 both are int
    @return result()
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }
    /**
    function updates data 
    @param $data, $where data refers to new data, where refers to location of data
    @return update()
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
    deletes data
    @param $where location of data
    @return method delete()
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /** 
    function counts data 
    @param $data = NULL array or list type
    @return method count_all()
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
