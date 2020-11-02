<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Bankrolls_model extends CI_Model {

    protected $table = "bankrolls";

    // Inserts the new model into the bankrolls table.
    // 
    // @data - new bankroll model
    // @return bool - True if inserted successfully; False, otherwise
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    // Retrieves the model from the bankrolls table.
    // 
    // @where key - location of the model to retrieve
    // @return - the model at the given location
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('bankers', 'bankers.idbanker = ' . $this->table . '.bankerId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    // Retrieves all the models from the bankrolls table.
    // 
    // @return array - all the models from the table
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('bankers', 'bankers.idbanker = ' . $this->table . '.bankerId')
                        ->get()
                        ->result();
    }

    // Retrieves the sum of the amounts from the bankrolls table.
    // 
    // @where key - location of the model to retrieve
    // @return - the sum of the amounts at the given location
    public function spare($where) {
        return $this->db->select_sum('amount')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('bankers', 'bankers.idbanker = ' . $this->table . '.bankerId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    // Displays a number of rows from top to bottom.
    // 
    // @nbre int - number of rows to limit the results to
    // @base int - number of rows to skip
    // @return - the model at the given location
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('bankers', 'bankers.idbanker = ' . $this->table . '.bankerId')
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }

    // Updates the model from the bankrolls table.
    // 
    // @where key - location of the model to update
    // @return - the model at the given location
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }

    // Delete the model from the bankrolls table.
    // 
    // @where key - location of the model to delete
    // @return - the model at the given location
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }

    // Count the number of rows in the bankrolls table.
    // 
    // @where key - location of the model to delete
    // @return int - total number of rows in the bankroll table, or 0
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
