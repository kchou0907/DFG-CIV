<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Needs extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->needs_model->find(array('idneed' => $id));
            } else {
                $data = $this->needs_model->getAll();
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
            if (!empty($data["householdId"]) && !empty($data["need"])) {
                $id = uniqid('', true);
                $householdId = $this->security->xss_clean($data["householdId"]);
                $need = $this->needs_model->find(array('householdId' => $householdId, 'needDate >=' => date('Y-m-d 00:00:00'), 'needDate <=' => date('Y-m-d 23:59:59')));
                if ($need) {
                    $this->response(['status' => false, 'message' => 'Conflict'], REST_Controller::HTTP_CONFLICT);
                } else {
                    $this->needs_model->save(array(
                        'idneed' => $id,
                        'householdId' => $householdId,
                        'need' => $this->security->xss_clean($data["need"]),
                        'description' => $this->security->xss_clean($data["description"]),
                        'needDate' => date('Y-m-d H:i:s')));

                    $suppliers = $this->suppliers_model->getAll();
                    foreach ($suppliers as $s) {
                        $message = "<p>Cher partenaire</p>"
                                . "<p>Des besoins viennent d'être enrégistrés. <br>"
                                . "Veuillez vous connecter pour les voir</p>"
                                . "<p><em>Si vous rencontrez un problème, n'hésitez pas à contacter l'administrateur.</em></p>"
                                . "<p>L'Administrateur</p>";

                        $config = array();
                        $config['protocol'] = 'mail';
                        $config['mailpath'] = '/usr/sbin/sendmail';
                        $config['charset'] = 'utf-8';
                        $config['mailtype'] = 'html';
                        $config['newline'] = "\r\n";
                        $config['wordwrap'] = TRUE;
                        $this->email->initialize($config);

                        $this->email->clear();
                        $this->email->from('no-reply@csss-ci.com', 'CSSS-CARE', 'dashboard@csss-ci.com');
                        $this->email->to($s->email);
                        $this->email->bcc('jacquagnui@gmail.com');
                        $this->email->subject("CSSS-CARE - Nouveaux besoins enrégistrés");
                        $this->email->message($message);
                        $this->email->send();
                    }

                    $this->response([$id], REST_Controller::HTTP_OK);
                }
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
            if (!empty($data["idneed"]) && !empty($data["need"])) {
                $id = $this->security->xss_clean($data["idneed"]);

                $donnee = array(
                    'need' => $this->security->xss_clean($data["need"]),
                    'description' => $this->security->xss_clean($data["description"]),
                );
                $this->needs_model->update($donnee, array('idneed' => $id));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_delete($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $this->needs_model->delete(array('idneed' => $id));
            $this->response(['success'], REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function household_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $data = $this->needs_model->find(array('householdId' => $id));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function town_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $id = isset($id) ? $this->security->xss_clean($id) : $userData->town;

            $data = array();
            $associations = $this->associations_model->find(array('townHallId' => $id));
            foreach ($associations as $a) {
                $households = $this->households_model->find(array('associationId' => $a->idassociation));
                foreach ($households as $h) {
                    $data += $this->needs_model->find(array('householdId' => $h->idhousehold, 'status' => 0));
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

            $data = $this->needs_model->find(array('associationId' => $id));

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function service_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $id = isset($id) ? $this->security->xss_clean($id) : $userData->town;

            $data = array();
            $associations = $this->associations_model->find(array('townHallId' => $userData->town));
            foreach ($associations as $a) {
                $households = $this->households_model->find(array('associationId' => $a->idassociation));
                foreach ($households as $h) {
                    $data += $this->needs_model->find(array('householdId' => $h->idhousehold, 'need' => $id));
                }
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
