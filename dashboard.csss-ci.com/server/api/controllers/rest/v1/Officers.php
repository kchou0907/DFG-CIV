<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

/**
 * Class for Officers API
 */
class Officers extends REST_Controller {

    /**
     * Invokes the parent class's constructor 
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Gets the officer's id 
     *
     * @param Integer $id - integer for identification number, id = 0 if none is specified 
     */
    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->officers_model->find(array('idofficer' => $id));
            } else {
                $data = $this->officers_model->getAll();
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Creates an officer account if all necessary fields are valid, otherwise throws an error  
     */
    public function index_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["townHallId"]) && !empty($data["officer"]) && !empty($data["phone"]) && !empty($data["email"])) {
                $id = uniqid('', true);
                $password = random_string('alnum', 8);
                $email = $this->security->xss_clean($data["email"]);
                $name = $this->security->xss_clean($data["officer"]);
                $office = $this->security->xss_clean($data["office"]);

                $this->officers_model->save(array(
                    'idofficer' => $id,
                    'townHallId' => $this->security->xss_clean($data["townHallId"]),
                    'officer' => $name,
                    'office' => $office,
                    'role' => strtolower($office) == 'coordinateur' ? 'coordinator' : 'officer',
                    'phone' => $this->security->xss_clean($data["phone"]),
                    'email' => $email,
                    'password ' => cryptage($password)
                ));

                $message = "<p>Cher partenaire</p>"
                        . "<p>Votre compte CdSSS vient d'être créée.<br>"
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
                $this->email->bcc('jacquagnui@gmail.com');
                $this->email->subject("CSSS-CARE - Paramètres de connexion");
                $this->email->message($message);
                $this->email->send();

                $this->response([$id], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Updates officers model database if all necessary fields are valid, otherwise throws an error  
     */
    public function index_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idofficer"]) && !empty($data["officer"]) && !empty($data["phone"]) && !empty($data["email"])) {
                $id = $this->security->xss_clean($data["idofficer"]);

                $donnee = array(
                    'officer' => $this->security->xss_clean($data["officer"]),
                    'phone' => $this->security->xss_clean($data["phone"]),
                    'office' => $this->security->xss_clean($data["office"]),
                    'email' => $this->security->xss_clean($data["email"]),
                );

                $this->officers_model->update($donnee, array('idofficer' => $id));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Finds the officers associated with a town hall id 
     *
     * @param Integer $id - integer for identification number, id = null if none is specified 
     */
    public function town_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $id = isset($id) ? $this->security->xss_clean($id) : $this->authorization_token->userData()->id;

            $data = $this->officers_model->find(array('townHallId' => $id));

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Updates an officer's password if the officer id is valid and if the 'password' and 'new password' fields are not empty, otherwise throws an error 
     */
    public function password_put() {
        $verify = $this->verification->authorization();
        $id = $verify->id;

        $data = json_decode(file_get_contents('php://input'), true);
        if (!empty($data["password"]) && !empty($data["newPassword"])) {

            $password = $this->security->xss_clean($data["password"]);
            $newPassword = $this->security->xss_clean($data["newPassword"]);

            $this->officers_model->update(
                    array('password' => cryptage($newPassword)),
                    array('idofficer' => $id, 'password ' => cryptage($password))
            );

            $this->response(['Success'], REST_Controller::HTTP_OK);
        } else {
            $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Returns an HTTP response status code (defaults to NULL) and phrase 
     *
     * @return Codeigniter\HTTP\Response status code and phrase  
     */
    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
