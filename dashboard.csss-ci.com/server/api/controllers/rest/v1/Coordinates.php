<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Coordinates extends REST_Controller {
    /**
    extends the parent constructer method
    */
    public function __construct() {
        parent::__construct();
    }
    /**
     *updates the townHall_model with the townHall name and the id of the townHall 
      If the townhall name is empty then exits the script with bad request message. 
      If there isn't a valid token or status is false,  exits script
     * @param int $id - id of user
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
     * gets the response that HTTP is okay to go 
     * @ return null - runs the script with HTTP okay
    */
    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
