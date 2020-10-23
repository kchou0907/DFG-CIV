<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Projects extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->proposals_model->find(array('idproposal' => $id, 'selected' => true));
            } else {
                $data = $this->proposals_model->find(array('selected' => true));
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["needId"]) && !empty($data["timeLimit"])) {
                $id = uniqid('', true);
                $needId = $this->security->xss_clean($data["needId"]);
                $payment = $this->security->xss_clean($data["payment"]);
                $timeLimit = $this->security->xss_clean($data["timeLimit"]);

                $this->proposals_model->save(array(
                    'idproposal' => $id,
                    'supplierId' => $userData->id,
                    'needId' => $needId,
                    'payment' => $payment,
                    'timeLimit' => intval($timeLimit),
                    'detail' => $this->security->xss_clean($data["detail"]),
                    'proposalDate' => date('Y-m-d H:i:s')
                ));

                $this->response([$id], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idproposal"])) {

                $idproposal = $this->security->xss_clean($data["idproposal"]);
                $payment = $this->security->xss_clean($data["payment"]);
                $timeLimit = $this->security->xss_clean($data["timeLimit"]);

                $this->proposals_model->update(
                        array('payment' => $payment,
                            'timeLimit' => intval($timeLimit),
                            'detail' => $this->security->xss_clean($data["detail"])
                        ),
                        array('idproposal' => $idproposal));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function visit_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idproposal"]) && !empty($data["visitDate"]) && !empty($data["hour"])) {
                $idproposal = $this->security->xss_clean($data["idproposal"]);
                $day = $this->security->xss_clean($data["visitDate"]);
                $hour = $this->security->xss_clean($data["visitDate"]);
                $this->proposals_model->update(
                        array('visitDate' => $day . ' ' . $hour), array('idproposal' => $idproposal));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function workEnd_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idproposal"])) {
                $idproposal = $this->security->xss_clean($data["idproposal"]);
                $this->proposals_model->update(array('workEnd' => date('Y-m-d H:i:s')), array('idproposal' => $idproposal));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function observation_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idproposal"]) && !empty($data["observation"])) {
                $idproposal = $this->security->xss_clean($data["idproposal"]);
                $observation = $this->security->xss_clean($data["observation"]);

                $this->proposals_model->update(array('observation' => $observation), array('idproposal' => $idproposal));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function transfer_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idproposal"]) && !empty($data["transfer"])) {
                $idproposal = $this->security->xss_clean($data["idproposal"]);
                $transfer = $this->security->xss_clean($data["transfer"]);
                $this->proposals_model->update(
                        array('transfer' => $transfer),
                        array('idproposal' => $idproposal)
                );
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function transfers_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = $this->proposals_model->find(array('transfer >' => 0, 'insured' => 0));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function insureds_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = $this->proposals_model->find(array('insured > ' => 0));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function association_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();

            $data = array();
            $households = $this->households_model->find(array('associationId' => $userData->id));
            foreach ($households as $h) {
                $needs = $this->needs_model->find(array('householdId' => $h->idhousehold));
                foreach ($needs as $n) {
                    $data += $this->proposals_model->find(array('needId' => $n->idneed, 'selected' => true));
                }
            }

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function town_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $id = $userData->town;
            $data = $this->proposals_model->find(array('townHallId' => $id, 'selected' => true));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
