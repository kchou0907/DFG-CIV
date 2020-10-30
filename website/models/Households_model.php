<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Households_model extends CI_Model {

    protected $table = "households";

    /**
     * Inserts a new row into the table
     *
     * @param Array $data - object with data (field/value pairs)
     * @returns Boolean - TRUE on success, FALSE on fail
     */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    /**
     * Finds the rows that fulfill the condition
     *
     * @param Array/String $where - Name of field to compare (ex "id=4"), or associative array
     * @return Array containing the rows that match the constraint
     */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns every row in the complaints table and their related households
     *
     * @return Array containing all the rows
     */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Shows a certain amount of rows (top down)
     *
     * @param Integer $nbre = number of rows to limit the resutls to
     * @param Integer $base = numer of rows to skip
     * @return Array containing the amount of rows you specified
     */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->limit($nbre, $base)
                        ->get()
                        ->result();
    }

    /**
     * Modifies existing records in the table
     *
     * @param Array $data - Array with data (field/value pairs)
     * @param String $where - Name of field to compare (ex "id=4"), or associative array, rows you want to replace
     * @return Boolean - true on success, false on failure
     */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }

    /**
     * Deletes rows form the table
     *
     * @param Array/String $where - Name of field to compare (ex "id=4"), or associative array, rows you want to delete
     * @return BaseBuilder/Boolean - BaseBuilder instance (for method chaining) or FALSE on fail
     */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }

    /**
     * Counts the number of rows in the entity with a particular value
     *
     * @param Array $data - what you want to match
     * @return Integer - number of rows
     */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}
