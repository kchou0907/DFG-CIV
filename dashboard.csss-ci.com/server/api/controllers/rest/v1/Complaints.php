<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Complaints extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

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

    public function household_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $data = $this->complaints_model->find(array('householdId' => $id));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
