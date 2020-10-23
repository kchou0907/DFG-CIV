<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Associations_model extends CI_Model {

    protected $table = "associations";

    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->where($where)
                        ->get()
                        ->result();
    }
    
    
    public function login($where, $orWhere) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->where($where)
                        ->or_where($orWhere)
                        ->get()
                        ->result();
    }

    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->get()
                        ->result();
    }

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

    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('townHalls', 'townHalls.idtownHall = ' . $this->table . '.townHallId')
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }

    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }

    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }

    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
