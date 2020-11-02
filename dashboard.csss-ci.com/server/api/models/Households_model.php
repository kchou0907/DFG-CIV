<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * Households_model
 */

class Households_model extends CI_Model {
    
    /**
     * Data table for class manipulation
     */
    protected $table = "households";

    /**
     * Inserts data in the households table
     *
     * @param Array $data - the data to be inserted into the database
     * @return Boolean indicating success of insertion
     */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    /**
     * Finds and returns data and rows with desired association
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired association
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
     * Returns all rows in households table
     * 
     * @return Array of all rows 
     */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Returns all records where family size is a desired amount
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired family amount
     */
    public function familySize($where) {
        return $this->db->select_sum('familySize')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns all records of men with desired association with additional filter 
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired association
     */
    public function men($where) {
        return $this->db->select_sum('men')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns all records of men with desired association
     *
     * @return Array containing rows with desired association
     */
    public function mens() {
        return $this->db->select_sum('men')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Returns all records of women with desired association with additional filter
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired association
     */
    public function woman($where) {
        return $this->db->select_sum('woman')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns all records of women with desired association
     *
     * @return Array containing rows with desired association
     */
    public function women() {
        return $this->db->select_sum('woman')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Returns all records of children with desired association with additonal filter
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired association
     */
    public function child($where) {
        return $this->db->select_sum('child')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns all records of children with desired association
     *
     * @return Array containing rows with desired age association
     */
    public function children() {
        return $this->db->select_sum('child')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Returns all records with desired age association with additonal filter 
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired age association
     */
    public function age0($where) {
        return $this->db->select_sum('age0')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns all records with desired age association
     *
     * @return Array containing rows with desired age association
     */
    public function ages0() {
        return $this->db->select_sum('age0')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Returns all records with desired age association
     *
     * @return Array containing rows with desired age association
     */   
    public function ages15() {
        return $this->db->select_sum('age15')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Returns all records with desired age association
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired age association
     */
    public function age15($where) {
        return $this->db->select_sum('age15')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns all records with desired age association
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired age association
     */
    public function age22($where) {
        return $this->db->select_sum('age22')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns all records with desired age association
     *
     * @return Array containing rows with desired age association
     */
    public function ages22() {
        return $this->db->select_sum('age22')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Returns all records with desired age association
     *
     * @param Array or String $where - Associative array or custom string
     * @return Array containing rows with desired age association
     */
    public function age49($where) {
        return $this->db->select_sum('age49')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->where($where)
                        ->get()
                        ->result();
    }

    /**
     * Returns all records with desired age association
     *
     * @return Array containing rows with desired age association
     */
    public function ages49() {
        return $this->db->select_sum('age49')
                        ->from($this->table)
                        ->join('associations', 'associations.idassociation = ' . $this->table . '.associationId')
                        ->get()
                        ->result();
    }

    /**
     * Displays a certain number rows in table
     *
     * @param Integer $nbre - number of rows to limit the results to
     * @param Integer $base - number of rows to skip
     * @return Array with the desired number of rows returned by the query
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
     * Modifies records in table 
     *
     * @param Array $data - Data for the new table
     * @param Array or string $where - Associative array or custom string
     * @return Boolean indicating success of update
     */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }

    /**
     * Deletes all rows with desired association
     *
     * @param Array or String $where - Associative array or custom string of rows to be deleted
     * @return Boolean indication success of deletion 
     */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }

    /**
     * Counts the number of rows with desired association  
     *
     * @param Array $data - desired value
     * @return Integer num rows 
     */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}