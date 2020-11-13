<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Bankrolls_model extends CI_Model {

    protected $table = "bankrolls";

    /*
    * Adds the data array into the bankrolls table.
    * 
    * @data array - new item to insert into table
    *
    * @return bool - True if inserted successfully; False, otherwise
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    /*
    * Retrieves rows with the given needs and bankers.
    * 
    * @where String or array - name of field to compare or associative array
    *                          to compare from table
    *
    * @return array - array of rows containing the given needs and bankers
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('bankers', 'bankers.idbanker = ' . $this->table . '.bankerId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /*
    * Retrieves all the rows from the bankrolls table.
    * 
    * @return array - array containing all the rows from the table
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('bankers', 'bankers.idbanker = ' . $this->table . '.bankerId')
                        ->get()
                        ->result();
    }

    /*
    * Retrieves the sum of the amounts of the rows with the given field name or
    * associative array from the bankrolls table.
    *
    * @where String or array - name of field to compare or associative array
    *                          to compare from table
    * 
    * @return array - the sum of the amounts at the given location
    */
    public function spare($where) {
        return $this->db->select_sum('amount')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('bankers', 'bankers.idbanker = ' . $this->table . '.bankerId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /*
    * Displays a number of rows from top to bottom.
    *
    * @nbre int - number of rows to limit the results to
    * @base int - number of rows to skip
    *
    * @return array - array containing a number of rows limited from top to
    *                 bottom
    */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('needs', 'needs.idneed = ' . $this->table . '.needId')
                        ->join('bankers', 'bankers.idbanker = ' . $this->table . '.bankerId')
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }

    /*
    * Updates the row from the bankrolls table.
    * 
    * @where String or array - name of field to compare or associative array
    *                          to compare from table
    *
    * @return bool - True if update successful; False, otherwise
    */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }

    /*
    * Delete the given row from the bankrolls table.
    *
    * @where String or array - name of field to compare or associative array
    *                          to compare from table
    *
    * @return bool - True if delete successful; False, otherwise
    */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }

    /*
    * Count the number of rows in the bankrolls table.
    *
    * @where String or array - name of field to compare or associative array
    *                          to compare from table
    *
    * @return int - total number of rows in the bankroll table, or 0
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
