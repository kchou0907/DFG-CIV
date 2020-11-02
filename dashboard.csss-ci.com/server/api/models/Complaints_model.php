<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Complaints_model extends CI_Model {

    protected $table = "complaints";

    // Inserts the new model into the complaints table.
    // 
    // @data - new bank model
    // @return bool - True if inserted successfully; False, otherwise
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    // Retrieves the model from the complaints table.
    // 
    // @where key - location of the model to retrieve
    // @return - the model at the given location
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('households', 'households.idhousehold = ' . $this->table . '.householdId')
                        ->where($where)
                        ->order_by('complaintDate', 'DESC')
                        ->get()
                        ->result();
    }

    // Retrieves all the models from the complaints table.
    // 
    // @return array - all the models from the table
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('households', 'households.idhousehold = ' . $this->table . '.householdId')
                        ->order_by('complaintDate', 'DESC')
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
                        ->join('households', 'households.idhousehold = ' . $this->table . '.householdId')
                        ->limit($nbre, $base)
                        ->order_by('complaintDate', 'DESC')
                        ->get()
                        ->result();
    }

    // Updates the model from the complaints table.
    // 
    // @where key - location of the model to update
    // @return - the model at the given location
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }

    // Delete the model from the complaints table.
    // 
    // @where key - location of the model to delete
    // @return - the model at the given location
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }

    // Count the number of rows in the complaints table.
    // 
    // @where key - location of the model to delete
    // @return int - total number of rows in the complaints table, or 0
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
