<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Proposals_model extends CI_Model {

    protected $table = "proposals";

    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('suppliers', 'suppliers.idsupplier = ' . $this->table . '.supplierId')
                        ->where($where)
                        ->order_by('proposalDate', 'DESC')
                        ->get()
                        ->result();
    }

    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('suppliers', 'suppliers.idsupplier = ' . $this->table . '.supplierId')
                        ->order_by('proposalDate', 'DESC')
                        ->get()
                        ->result();
    }

    public function show($where, $nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('suppliers', 'suppliers.idsupplier = ' . $this->table . '.supplierId')
                        ->where($where)
                        ->limit($nbre, $base)
                        ->order_by('proposalDate', 'DESC')
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
