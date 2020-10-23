<?php
require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Roadmaps extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->roadmaps_model->find(array('proposalId' => $id));
            } else {
                $data = $this->roadmaps_model->getAll();
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
            if (!empty($data["proposalId"]) && !empty($data["task"])) {

                $proposalId = $this->security->xss_clean($data["proposalId"]);
                $task = $this->security->xss_clean($data["task"]);
                $duration = $this->security->xss_clean($data["duration"]);
                $this->roadmaps_model->save(array(
                    'proposalId' => $proposalId,
                    'task' => $task,
                    'duration' => $duration)
                );
                $this->response([$proposalId], REST_Controller::HTTP_OK);
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
            if (!empty($data["idroadmap"]) && !empty($data["executed"])) {

                $idroadmap = $this->security->xss_clean($data["idroadmap"]);
                $executedDate = $this->security->xss_clean($data["executedDate"]);
                $donnee = array(
                    'executed' => 1,
                    'executedDate' => $executedDate
                );
                $this->roadmaps_model->update($donnee, array('idroadmap' => $idroadmap));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    
    
    public function need_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            
            $data = $this->roadmaps_model->find(array('needId' => $id,'supplierId' => $userData->id));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
