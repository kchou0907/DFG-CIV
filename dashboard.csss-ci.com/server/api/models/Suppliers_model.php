<?php

/**
tests to see if BASEPATH is defined
*/
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
class that controls Suppliers model
extends from CI_Model
*/
class Suppliers_model extends CI_Model {
    
    /**
    private var for table
    */
    protected $table = "suppliers";
    
    /**
    saves data
    @param $data seems to be a list or array
    @return method insert()
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
    /**
    finds location of data
    @param $where seesms to be int
    @return method result()
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
    function to control login of user, finds user login info to cross check
    @param $where, $orWhere
    @return method result()
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
    gets all data
    @param null
    @return method result()
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
    function to show data to user
    @param $nbre, $base = 0 seems to have int type
    @return method result()
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
    updates data
    @param $data, $where  list, array type for $data and int for $where
    @return method update()
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
    /**
    delete data from table
    @param $where int type
    @return method delete()
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    /**
    count data from table
    @param $data = NULL, array or list type
    @return method count_all()
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
