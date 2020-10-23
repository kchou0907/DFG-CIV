<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Households_model extends CI_Model {

    protected $table = "households";

    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
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
