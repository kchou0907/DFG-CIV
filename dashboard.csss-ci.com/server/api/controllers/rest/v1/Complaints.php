<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Complaints extends REST_Controller {
    /**
    extends the parent constructer method
    */
    public function __construct() {
        parent::__construct();
    }
    /**
     *sets up conditional that if there is a valid token and that its status is 'true', 
      then creates an array if the id is not empty. If id is empty then all the rows from complaint_model is placed in the array. 
      Then runs script that HTTP is responsive. 
      If there isn't a valid token or status is false,  exits script
     * @param int $id = 0 - id of user
    */
    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->complaints_model->find(array('idcomplaint' => $id));
            } else {
                $data = $this->complaints_model->getAll();
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
     * saves user information within complaints_model query with household id, title of complaint, the complaint and date. 
       if cannnot update query, exits script. If there is no valid token 
       or the status of said token is false, exits script. 
    */
    public function index_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["householdId"]) && !empty($data["title"]) && !empty($data["complaint"])) {

                $this->complaints_model->save(array(
                    'householdId' => $this->security->xss_clean($data["householdId"]),
                    'title' => $this->security->xss_clean($data["title"]),
                    'complaint' => $this->security->xss_clean($data["complaint"]),
                    'complaintDate' => date('Y-m-d H:i:s')
                        )
                );
                $this->response(['success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
     * updates complaint_model database with the id of the complaint and the complaint of the user 
       if there is no id of complaint or complaint, exit script. 
       Again if no valid_token or the status of token is false, exits script
    */
    public function index_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idcomplaint"]) && !empty($data["complaint"])) {
                $id = $this->security->xss_clean($data["idcomplaint"]);

                $donnee = array(
                    'complaint' => $this->security->xss_clean($data["complaint"]),
                );

                $this->complaints_model->update($donnee, array('idcomplaint' => $id));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
     * gets the id of the townhall and sets up array with each household id that submitted a complaint
       from complaint_models query
       if valid_token is empty or its status is false, script exits
     * @param String/Array $id = null - id of the user
    */
    public function town_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $userData = $this->authorization_token->userData();
            if (isset($id)) {
                $id = $this->security->xss_clean($id);
            } else {
                $id = $userData->town;
            }

            $data = array();
            $associations = $this->associations_model->find(array('townHallId' => $id));
            foreach ($associations as $a) {
                $households = $this->households_model->find(array('associationId' => $a->idassociation));
                foreach ($households as $h) {
                    $data = $this->complaints_model->find(array('householdId' => $h->idhousehold));
                }
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
     * gets the id of the association of user from the complaint_model
       if valid_token is empty or its status is false, then script exits
     * @param String/Array $id = null - id of the user
    */
    public function association_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $id = isset($id) ? $this->security->xss_clean($id) : $userData->id;
         
            $data = $this->complaints_model->find(array('associationId' => $id));


            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
     * finds the household id of the user from the complaints model. 
       If valid_token is empty or its status is false, exits script
     * @param String/Array $id - id of the user
    */
    public function household_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $data = $this->complaints_model->find(array('householdId' => $id));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
     * gets the response that HTTP is okay to go 
     * @ return null - runs the script with HTTP okay
    */
    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
