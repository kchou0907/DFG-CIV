<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Banks_model extends CI_Model {

    protected $table = "banks";

    /*
    * Adds the data array into the banks table.
    * 
    * @data array - new item to insert into table
    *
    * @return bool - True if inserted successfully; False, otherwise
    */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    /*
    * Retrieves rows with the given field name or associative array.
    * 
    * @where String or array - name of field to compare or associative array
    *                          to compare from table
    *
    * @return array - array of rows matching the field name or associative array
    */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->where($where)
                        ->get()
                        ->result();
    }

    /*
    * Retrieves all the rows from the banks table.
    * 
    * @return array - array containing all the rows from the table
    */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
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
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }

    /*
    * Updates the row from the banks table.
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
    * Delete the given row from the banks table.
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
    * Count the number of rows in the banks table.
    *
    * @where String or array - name of field to compare or associative array
    *                          to compare from table
    *
    * @return int - total number of rows in the banks table, or 0
    */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
