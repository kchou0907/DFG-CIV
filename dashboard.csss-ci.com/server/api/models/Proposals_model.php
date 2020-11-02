<?php
​
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
​
class Proposals_model extends CI_Model {
​
    protected $table = "proposals";
​
    // Inserts the new model into the proposals table.
    // 
    // @data - new bankroll model
    // @return Boolean - True if inserted successfully; False, otherwise
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }
​
    // Retrieves the model from the proposals table.
    // 
    // @where key - location of the model to retrieve
    // @return - the model at the given location
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
​
    // Retrieves all the models from the proposals table.
    // 
    // @return Array - all the models from the table
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('suppliers', 'suppliers.idsupplier = ' . $this->table . '.supplierId')
                        ->order_by('proposalDate', 'DESC')
                        ->get()
                        ->result();
    }
​
    // Displays a number of rows from top to bottom.
    // 
    // @nbre Integer - number of rows to limit the results to
    // @base Integer - number of rows to skip
    // @return - the model at the given location
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
​
    // Updates the model from the proposals table.
    // 
    // @where key - location of the model to update
    // @return - the model at the given location
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }
​
    // Delete the model from the proposals table.
    // 
    // @where key - location of the model to delete
    // @return - the model at the given location
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
​
    // Count the number of rows in the proposals table.
    // 
    // @where key - location of the model to delete
    // @return Integer - total number of rows in the bankroll table, or 0
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }
​
}
