<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';
/**
class controls im guessing coordinates of the town hall/muni
extends from REST_Controller
*/
class Coordinates extends REST_Controller {
    
    /**
    gets methods from parent class
    @param null
    @return null
    */
    public function __construct() {
        parent::__construct();
    }
    /**
    puts index of townhall into file
    @param int $id input number
    @return null
    */
    public function index_put($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["townHall"])) {
                $id = $this->security->xss_clean($id);
                $townHall = $this->security->xss_clean($data["townHall"]);

                $this->townHalls_model->update(array('townHall' => $townHall), array('idtownHall' => $id));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    options for index
    @param null
    @return object method
    */
    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
