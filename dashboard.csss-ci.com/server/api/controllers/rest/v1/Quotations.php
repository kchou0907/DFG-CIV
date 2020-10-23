<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Quotations extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->quotations_model->find(array('proposalId' => $id));
            } else {
                $data = $this->quotations_model->getAll();
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
            if (!empty($data["proposalId"]) && !empty($data["designation"]) && !empty($data["amount"])) {

                $proposalId = $this->security->xss_clean($data["proposalId"]);
                $designation = $this->security->xss_clean($data["designation"]);
                $amount = $this->security->xss_clean($data["amount"]);

                $this->quotations_model->save(array(
                    'proposalId' => $proposalId,
                    'designation' => $designation,
                    'amount' => intval($amount))
                );
                $this->response(['success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_delete($id) {

        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $this->quotations_model->delete(array('idquotation' => $id));

            $this->response(['Success'], REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idquotation"]) && !empty($data["designation"]) && !empty($data["amount"])) {

                $idquotation = $this->security->xss_clean($data["idquotation"]);
                $designation = $this->security->xss_clean($data["designation"]);
                $amount = $this->security->xss_clean($data["amount"]);

                $this->quotations_model->update(
                        array('designation' => $designation, 'amount' => $amount),
                        array('idquotation' => $idquotation));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function proposal_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = $this->quotations_model->find(array('proposalId' => $id));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function quote_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $quote = $this->quotations_model->quote(array('proposalId' => $id));
            foreach ($quote as $q) {
                $data = $q->amount;
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
