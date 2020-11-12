<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Banks extends REST_Controller {
    /**
     *extends the parent constructer method
    */
    public function __construct() {
        parent::__construct();
    }
    /**
     *sets up conditional that if there is a valid token and that its status is 'true', 
      then creates an array if the id is not empty. If id is empty then all the rows from bank_model is placed in the array. 
      Then sets a message that HTTP is responsive. 
      If there isn't a valid token or status is false, spits a response that HTTP is not found
     * @param int $id = 0 - id of bank user
    */
    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->banks_model->find(array('idbank' => $id));
            } else {
                $data = $this->banks_model->getAll();
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
     * saves user information within database with id, password, email, phone, banker name, etc. 
       if cannnot update query, sets a response that says HTTP is unavailable. If there is no valid token 
       or the status of said token is false, then response will say HTTP not found. 
    */
    public function index_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["bank"]) && !empty($data["banker"]) && !empty($data["phone"]) && !empty($data["email"])) {
                $id = uniqid('', true);
                $password = random_string('alnum', 8);

                $this->db->trans_start();
                $this->db->trans_strict(FALSE);

                $this->banks_model->save(array(
                    'idbank' => $id,
                    'bank' => $this->security->xss_clean($data["bank"])
                        )
                );

                $this->bankers_model->save(array(
                    'bankId' => $id,
                    'idbanker' => uniqid('', true),
                    'banker' => $this->security->xss_clean($data["banker"]),
                    'phone' => $this->security->xss_clean($data["phone"]),
                    'email' => $this->security->xss_clean($data["email"]),
                    'password ' => cryptage($password)
                        )
                );
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
    /**
     * updates Bank_model database with the id of the user and the bank of the user 
       if there is no townhall or json file is bad, then response will show HTTP not found. 
     * @param String/Array $id - id of bank user
    */
    public function index_put($id) {

        $data = json_decode(file_get_contents('php://input'), true);
        if (!empty($data["townHall"])) {
            $id = $this->security->xss_clean($id);
            $townHall = $this->security->xss_clean($data["bank"]);

            $this->banks_model->update(array('bank' => $townHall), array('idbank' => $id));
            $this->response(['Success'], REST_Controller::HTTP_OK);
        } else {
            $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    /**
     * sets up banker user with id, bankid, banker name, phone, email, and password and saves it to banker_model query
       also sets up html to display fields that banker user sees and needs to input 
       also sends email to banker email from admin email confirming account creation
       if valid_token is empty or its status is false, HTTP will not be found. If any of the fields are not put in
       HTTP would read bad request. 
    */
    public function banker_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["bankId"]) && !empty($data["banker"]) && !empty($data["phone"]) && !empty($data["email"])) {
                $id = uniqid('', true);
                 $bankId = $this->security->xss_clean($data["bankId"]);
                $email = $this->security->xss_clean($data["email"]);
                $password = random_string('alnum', 8);

                $this->bankers_model->save(
                        array( 
                            'idbanker' =>$id,
                            'bankId' => $bankId,                           
                            'banker' => $this->security->xss_clean($data["banker"]),
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
                        . "<p><a href='https://dashboard.csss-ci.com/' style='display: inline-block; text-decoration: none; font-weight: 700;'>https://dashboard.csss-ci.com/</a></p>"
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
                $this->email->subject("CSSS-CARE - Les Paramètres de connexion");
                $this->email->message($message);
                $this->email->send();


                $this->set_response([$id], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
     * gets the id and bank id of the user. If id not found, then town id is used instead
       If valid_token is empty or its staus is false, HTTP isn't found
     * @param String/Array $id - id of banker user
    */
    public function bankers_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $id = isset($id) ? $this->security->xss_clean($id) : $this->authorization_token->userData()->town;

            $data = $this->bankers_model->find(array('bankId' => $id));

            $this->response($data, REST_Controller::HTTP_OK);
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
