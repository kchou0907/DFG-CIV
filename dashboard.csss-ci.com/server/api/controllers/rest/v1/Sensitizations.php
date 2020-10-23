<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Sensitizations extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->messages_model->find(array('idmessage' => $id));
            } else {
                $data = $this->messages_model->getAll();
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
            if (!empty($data["message"]) && !empty($data["recipient"])) {

                $message = $this->security->xss_clean($data["message"]);
                $recipient = $this->security->xss_clean($data["recipient"]);

                $retourSms = envoisms($recipient, $message, 'CSSS-CARE');

                $this->messages_model->save(array(
                    'message' => $message,
                    'messageDate' => date('Y-m-d H:i:s'),
                    'recipient' => $recipient)
                );
                $reponse = explode(' ', $retourSms);
                if ($response[0] == 'OK') {
                    $this->set_response([$reponse[1]], REST_Controller::HTTP_OK);
                } else {
                    $this->set_response([$reponse[1]], REST_Controller::HTTP_BAD_GATEWAY);
                }
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function voice_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["message"]) && !empty($data["recipient"])) {

                $message = $this->security->xss_clean($data["message"]);
                $recipient = $this->security->xss_clean($data["recipient"]);
                $u = explode(',', $recipient);
                for ($i = 0; $i <= count($u); $i++) {
                     
                    $this->messages_model->save(array(
                        'message' => $message,
                        'messageType' => 1,
                        'messageDate' => date('Y-m-d H:i:s'),
                        'recipient' => $recipient)
                    );
                    envoivoice($u[$i], $message);                  
                }


                $this->set_response(['success'], REST_Controller::HTTP_OK);
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
            if (!empty($data["idmessage"]) && !empty($data["message"])) {
                $id = $this->security->xss_clean($data["idmessage"]);

                $donnee = array('message' => $this->security->xss_clean($data["message"]));

                $this->messages_model->update($donnee, array('idmessage' => $id));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function countText_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $data = $this->messages_model->find(array('messageType' => 0));

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function countVoice_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = $this->messages_model->find(array('messageType' => 1));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function all_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["message"])) {

                $message = $this->security->xss_clean($data["message"]);
                $this->db->trans_start();
                $this->db->trans_strict(FALSE);

                $households = $this->households_model->getAll();
                $countHousehold = count($households);
                foreach ($households as $h) {
                    envoisms('225' . $h->cellPhone, $message, 'CSSS');
                }

                $this->messages_model->save(array(
                    'message' => $message,
                    'messageDate' => date('Y-m-d H:i:s'),
                    'recipient' => "$countHousehold ménages, $countAssociation présidents"
                        )
                );

                $this->db->trans_complete();

                if ($this->db->trans_status() === FALSE) {
                    $this->db->trans_rollback();
                    $response = ['status' => parent::HTTP_FORBIDDEN, 'message' => 'Forbidden'];
                    $status = REST_Controller::HTTP_FORBIDDEN;
                } else {
                    $this->db->trans_commit();
                    $response = 'success';
                    $status = REST_Controller::HTTP_OK;
                }
                $this->set_response($response, $status);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function allVoice_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["message"])) {

                $message = $this->security->xss_clean($data["message"]);
                $this->db->trans_start();
                $this->db->trans_strict(FALSE);

                $households = $this->households_model->getAll();
                $countHousehold = count($households);
                foreach ($households as $h) {
                    $this->messages_model->save(array(
                        'message' => $message,
                        'messageType' => 1,
                        'messageDate' => date('Y-m-d H:i:s'),
                        'recipient' => '225' . $h->cellPhone
                    ));
                    envoivoice('225' . $h->cellPhone, $message);
                }



                $this->db->trans_complete();

                if ($this->db->trans_status() === FALSE) {
                    $this->db->trans_rollback();
                    $response = ['status' => parent::HTTP_FORBIDDEN, 'message' => 'Forbidden'];
                    $status = REST_Controller::HTTP_FORBIDDEN;
                } else {
                    $this->db->trans_commit();
                    $response = 'success';
                    $status = REST_Controller::HTTP_OK;
                }
                $this->set_response($response, $status);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function association_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["recipient"]) && !empty($data["message"])) {

                $id = $this->security->xss_clean($data["recipient"]);
                $message = $this->security->xss_clean($data["message"]);
                $this->db->trans_start();
                $this->db->trans_strict(FALSE);

                $households = $this->households_model->find(array('associationId' => $id));
                foreach ($households as $h) {
                    envoisms('225' . $h->cellPhone, $message, 'CSSS');
                }

                $count = count($households) + count($associations);
                $this->messages_model->save(array(
                    'message' => $message,
                    'messageDate' => date('Y-m-d H:i:s'),
                    'recipient' => "$count membres de l'AVEC $association"
                        )
                );

                $this->db->trans_complete();

                if ($this->db->trans_status() === FALSE) {
                    $this->db->trans_rollback();
                    $response = ['status' => parent::HTTP_FORBIDDEN, 'message' => 'Forbidden'];
                    $status = REST_Controller::HTTP_FORBIDDEN;
                } else {
                    $this->db->trans_commit();
                    $response = 'success';
                    $status = REST_Controller::HTTP_OK;
                }
                $this->set_response($response, $status);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function associationVoice_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["recipient"]) && !empty($data["message"])) {

                $id = $this->security->xss_clean($data["recipient"]);
                $message = $this->security->xss_clean($data["message"]);
                $this->db->trans_start();
                $this->db->trans_strict(FALSE);

                $households = $this->households_model->find(array('associationId' => $id));
                $count = count($households);

                foreach ($households as $h) {
                    $this->messages_model->save(array(
                        'message' => $message,
                        'messageType' => 1,
                        'messageDate' => date('Y-m-d H:i:s'),
                        'recipient' => '225' . $h->cellPhone
                    ));
                    envoivoice('225' . $h->cellPhone, $message);
                }



                $this->db->trans_complete();

                if ($this->db->trans_status() === FALSE) {
                    $this->db->trans_rollback();
                    $response = ['status' => parent::HTTP_FORBIDDEN, 'message' => 'Forbidden'];
                    $status = REST_Controller::HTTP_FORBIDDEN;
                } else {
                    $this->db->trans_commit();
                    $response = 'success';
                    $status = REST_Controller::HTTP_OK;
                }
                $this->set_response($response, $status);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function upload_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            //if (!empty($data["recipient"])) {
            $recipient = $this->security->xss_clean($data["recipient"]);
            $config['upload_path'] = 'uploads/voices/';
            $config['allowed_types'] = 'mp3';
            $config['encrypt_name'] = true;
            $this->load->library('upload', $config);

            if (!$this->upload->do_upload('file')) {
                $this->response([$this->upload->display_errors()], REST_Controller::HTTP_BAD_REQUEST);
            } else {
                $upload_data = $this->upload->data();
                $upload_path = 'uploads/voices/' . $upload_data['file_name'];

                $this->messages_model->save(array(
                    'message' => base_url($upload_path),
                    'messageDate' => date('Y-m-d H:i:s'),
                    'recipient' => $recipient
                        )
                );
                $voice = envoivoice('22508037767', base_url($upload_path), 'CSSS-CARE');
                if ($voice) {
                    $this->set_response([$upload_path], REST_Controller::HTTP_OK);
                } else {
                    $this->response(['Message non transmis'], REST_Controller::HTTP_FORBIDDEN);
                }
            }
            //  }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_TOKEN_EXPIRED_OR_INVALID);
        }
    }

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
