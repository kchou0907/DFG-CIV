<?php

defined('BASEPATH') OR exit('No direct script access allowed');

use Restserver\Libraries\REST_Controller;

require_once 'header.php';
require APPPATH . '/libraries/REST_Controller.php';

class Admins extends REST_Controller {

    /**
    * Used to instantiate an Admins Controller. Calls the REST_Controller as a superclass constructor
    */
    public function __construct() {
        parent::__construct();
    }

    /**
    * Gets all admins unless specified by an admin $id
    * @param integer $id - specified ID of an admin to retrieve
    */
    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->admins_model->find(array('idadmin' => $id));
            } else {
                $data = $this->admins_model->getAll();
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
    * Creates a new admin account. Once the new admin account is created it produces and sends an
    * email to the registered admin to confirm the admins registration
    * retrieves its attributes data from an uploaded file
    */
    public function index_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["admin"]) && !empty($data["email"])) {
                $id = uniqid('', true);
                $admin = $this->security->xss_clean($data["admin"]);
                $email = $this->security->xss_clean($data["email"]);
                $password = random_string('alnum', 8);
                $donnee = array(
                    'idadmin' => $id,
                    'admin' => $admin,
                    'email' => $email,
                    'password ' => cryptage($password)
                );
                $this->admins_model->save($donnee);


                $message = "<p>Cher(e) $admin<br>"
                        . "Veuillez trouver ci-dessous vos paramètres de connexion </p>"
                        . "<p>E-mail : <strong>$email</strong></p>"
                        . "<p>Mot de passe: <strong>$password</strong></p>"
                        . "<p>Cliquez sur le lien c-dessous pour aller à la page de connexion.</p>"
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
                $this->email->from('no-reply@csss-ci.com', 'CSSS', 'dashboard@csss-ci.com');
                $this->email->to($email);
                $this->email->subject("CSSS - Paramètres d'accès");
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
    * Updates an existing admin account. The admin account is registered by it's $id.
    *  The data it will update the admin with is entered by a file input
    * @param integer $id - the ID in the database specifying the admin account
    */
    public function index_put($id) {

        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["admin"]) && !empty($data["email"])) {
                $id = $this->security->xss_clean($id);
                $donnee = array(
                    'admin' => $this->security->xss_clean($data["admin"]),
                    'email' => $this->security->xss_clean($data["email"]),
                );

                $this->admins_model->update($donnee, array('idadmin' => $id));
                $message = ['status' => TRUE, 'message' => "Updated success"];
                $this->response($message, REST_Controller::HTTP_OK);
            } else {
                $this->response(['status' => FALSE, 'message' => "Bad Request"], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
    * Updates an existing admin account's password. The admin account is registered by it's $id.
    *  The data it will update the admin with a new password that is fetched by a file_input
    * @param integer $id - the ID in the database specifying the admin account to update the password
    */
    public function password_put($id) {

        $data = json_decode(file_get_contents('php://input'), true);
        if (!empty($data["password"]) && !empty($data["npassword"])) {
            $id = $this->security->xss_clean($id);
            $password = $this->security->xss_clean($data["password"]);
            $npassword = $this->security->xss_clean($data["npassword"]);

            $donnee = array('password' => cryptage($npassword));

            if ($this->verification->authorization()) {
                $this->admins_model->update($donnee, array('idadmin' => $id, 'password ' => cryptage($password)));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $response = ['status' => parent::HTTP_UNAUTHORIZED, 'message' => 'Unauthorized'];
                $this->set_response($response, parent::HTTP_UNAUTHORIZED);
            }
        } else {
            $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    /**
    *  Retrieve all households that have women as the family chief/head of household from the
    *   household model. This access is only accessable in Admin accounts
    */
    public function womenChief_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = $this->households_model->find(array('sex' => 0, 'familyChief' => 1));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    * Retrieve the total headcount of all the men in the household_model + amount of households that have a man in it.
    */
    public function mens_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $kj = $this->households_model->find(array('sex' => 1));
            $men = $this->households_model->mens();
            foreach ($men as $m) {
                $m = $m->men;
            }
            $data = $m + count($kj);
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    * Retrieve the total headcount of all the women in the household_model + amount of households that have a woman in it.
    */
    public function women_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $kj = $this->households_model->find(array('sex' => 0));
            $men = $this->households_model->women();
            foreach ($men as $m) {
                $w = $m->woman;
            }
            $data = $w + count($kj);
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    * Retrieve the total headcount of all the children in the household_model + amount of households that have a children in it.
    */
    public function children_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {

            $men = $this->households_model->children();
            foreach ($men as $m) {
                $count = $m->child;
            }
            $data = isset($count) ? $count : 0;
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    * Retrieve the total headcount of all the ppl age 0 in the household_model + amount of 
    *   households that have a person with bdays after jan 1 2006 in it.
    * This method is only accessable in Admin accounts
    */
    public function ages0_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $kj = $this->households_model->find(array('birthDate >=' => '2006-01-01'));

            $ages = $this->households_model->ages0();
            foreach ($ages as $a) {
                $age0 = $a->age0;
            }

            $data = $age0 + count($kj);
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    * Retrieve the total headcount of all the people age 15 in the household_model + amount of 
    *   households that have birthdays 1/1/1998 <= birthday <= 1/1/2006 in it.
    * This method is only accessable in Admin accounts
    */
    public function ages15_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $kj = $this->households_model->find(array('birthDate >=' => '1998-01-01', 'birthDate <=' => '2006-01-01'));

            $ages = $this->households_model->ages15();
            foreach ($ages as $a) {
                $age15 = $a->age15;
            }
            $data = $age15 + count($kj);
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    * Retrieve the total headcount of all the people age 22 in the household_model + amount of 
    *   households that have birthdays 1/1/1971 <= birthday <= 1/1/1997 in it.
    * This method is only accessable in Admin accounts
    */
    public function ages22_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $kj = $this->households_model->find(array('birthDate >=' => '1971-01-01', 'birthDate <=' => '1997-12-31'));

            $ages = $this->households_model->ages22();
            foreach ($ages as $a) {
                $age = $a->age22;
            }
            $data = $age + count($kj);
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    * Retrieve the total headcount of all the people age 49 in the household_model + amount of 
    *   households that have birthdays <= 1/1/1970 in it.
    * This method is only accessable in Admin accounts
    */
    public function ages49_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $kj = $this->households_model->find(array('birthDate <=' => '1970-01-01'));

            $ages = $this->households_model->ages49();
            foreach ($ages as $a) {
                $age = $a->age49;
            }
            $data = $age + count($kj);
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }
    /**
    *  Healthcheck for this API endpoint. Returns a status of 200 OK if the controller has not run
    *   into any errors
    */
    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
