<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class TownHalls extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->townhalls_model->find(array('idtownHall' => $id));
            } else {
                $data = $this->townhalls_model->getAll();
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
            if (!empty($data["townHall"]) && !empty($data["officer"]) && !empty($data["phone"]) && !empty($data["email"])) {
                $id = uniqid('', true);
                $email = $this->security->xss_clean($data["email"]);
                $password = random_string('alnum', 8);

                $this->db->trans_start();
                $this->db->trans_strict(FALSE);

                $this->townhalls_model->save(array(
                    'idtownHall' => $id,
                    'townHall' => $this->security->xss_clean($data["townHall"])
                ));

                $this->officers_model->save(array(
                    'townHallId' => $id,
                    'idofficer' => uniqid('', true),
                    'officer' => $this->security->xss_clean($data["officer"]),
                    'phone' => $this->security->xss_clean($data["phone"]),
                    'email' => $email,
                    'password ' => cryptage($password)
                        )
                );
                $message = "<p>Cher partenaire</p>"
                        . "<p>Votre compte vient d'être créée.<br>"
                        . "Veuillez trouver ci-dessous vos paramètres de connexion </p>"
                        . "<p>Adresse e-mail : <strong>$email</strong><br>"
                        . "Mot de passe: <strong>$password</strong></p>"
                        . "<p>Pour vous connecter, vous devriez aller à l'adresse suivante : </p>"
                        . "<p><a href='https://dashboard.csss-ci.com/' style='display: inline-block; text-decoration: none; background-color: #ccc; color: #000; font-weight: 700; text-align: center; padding: 15px 25px; border: none; border-radius: 0; margin: 20px;'>https://dashboard.csss-ci.com/</a></p>"
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
                $this->email->to($email);
                $this->email->subject("CSSS-CARE - Compte, Les Paramètres de connexion");
                $this->email->message($message);
                $this->email->send();



                $this->db->trans_complete();

                if ($this->db->trans_status() === FALSE) {
                    $this->db->trans_rollback();
                    $response = ['status' => parent::HTTP_FORBIDDEN, 'message' => 'Forbidden'];
                    $status = REST_Controller::HTTP_FORBIDDEN;
                } else {
                    $this->db->trans_commit();
                    $response = [$id];
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

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
