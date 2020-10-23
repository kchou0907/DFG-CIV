<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Households extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get($id = 0) {

        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->households_model->find(array('idhousehold' => $id));
            } else {
                $data = $this->households_model->getAll();
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
            if (!empty($data["household"]) && !empty($data["familySize"]) && !empty($data["cellPhone"])) {
                $id = uniqid('', true);
                $associationId = isset($data["associationId"]) ? $this->security->xss_clean($data["associationId"]) : $this->authorization_token->userData()->id;
                $nbreHouse = $this->households_model->find(array('associationId' => $associationId));

                if (count($nbreHouse) > 35) {
                    $this->response(['status' => FALSE, 'message' => 'Method Not Allowed'], REST_Controller::HTTP_METHOD_NOT_ALLOWED);
                } else {
                    $this->households_model->save(array(
                        'idhousehold' => $id,
                        'associationId' => $associationId,
                        'household' => $this->security->xss_clean($data["household"]),
                        'role' => $this->security->xss_clean($data["role"]),
                        'sex' => $this->security->xss_clean($data["sex"]),
                        'birthDate' => $this->security->xss_clean($data["birthDate"]),
                        'familyChief' => $this->security->xss_clean($data["familyChief"]),
                        'familySize' => $this->security->xss_clean($data["familySize"]),
                        'owner' => $this->security->xss_clean($data["owner"]),
                        'cellPhone' => $this->security->xss_clean($data["cellPhone"]),
                        'mail' => $this->security->xss_clean($data["mail"]),
                    ));

                    $this->response([$id], REST_Controller::HTTP_OK);
                }
            } else {
                $this->response(['status' => FALSE, 'message' => 'Veuillez remplir les champs obligatoire'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idhousehold"]) && !empty($data["familySize"]) && !empty($data["household"])) {
                $id = $this->security->xss_clean($data["idhousehold"]);

                $this->households_model->update(
                        array(
                            'household' => $this->security->xss_clean($data["household"]),
                            'role' => $this->security->xss_clean($data["role"]),
                            'sex' => $this->security->xss_clean($data["sex"]),
                            'birthDate' => $this->security->xss_clean($data["birthDate"]),
                            'familyChief' => $this->security->xss_clean($data["familyChief"]),
                            'familySize' => $this->security->xss_clean($data["familySize"]),
                            'owner' => $this->security->xss_clean($data["owner"]),
                            'cellPhone' => $this->security->xss_clean($data["cellPhone"]),
                            'mail' => $this->security->xss_clean($data["mail"])
                        ),
                        array('idhousehold' => $id));
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

            $this->households_model->delete(array('idhousehold' => $id));

            $this->response(['Success'], REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function address_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $data = json_decode(file_get_contents('php://input'), true);

            if (!empty($data["idhousehold"]) && !empty($data["lat"]) && !empty($data["lng"])) {
                $id = $this->security->xss_clean($data["idhousehold"]);

                $this->households_model->update(
                        array('lat' => $this->security->xss_clean($data["lat"]), 'lng' => $this->security->xss_clean($data["lng"])),
                        array('idhousehold' => $id));
                $this->response(['Position enrégistrée avec succès'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function enumeration_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idhousehold"]) && !empty($data["lat"]) && !empty($data["lng"])) {
                $id = $this->security->xss_clean($data["idhousehold"]);

                $this->households_model->update(
                        array(
                            'men' => $this->security->xss_clean(intval($data["men"])),
                            'women' => $this->security->xss_clean(intval($data["women"])),
                            'children' => $this->security->xss_clean(intval($data["children"])),
                            'age0' => $this->security->xss_clean(intval($data["age0"])),
                            'age15' => $this->security->xss_clean(intval($data["age15"])),
                            'age22' => $this->security->xss_clean(intval($data["age22"])),
                            'age49' => $this->security->xss_clean(intval($data["age49"]))
                        ),
                        array('idhousehold' => $id));
                $this->response(['Position enrégistrée avec succès'], REST_Controller::HTTP_OK);
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
            $id = isset($id) ? $this->security->xss_clean($id) : $userData->town;


            $data = array();
            $associations = $this->associations_model->find(array('townHallId' => $id));
            foreach ($associations as $a) {
                $data += $this->households_model->find(array('associationId' => $a->idassociation));
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
            $data = array();
            $data += $this->households_model->find(array('associationId' => $id));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
