<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Suppliers extends REST_Controller {

    public function __construct($config = 'rest') {
        parent::__construct($config);
    }

    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->suppliers_model->find(array('idsupplier' => $id));
            } else {
                $data = $this->suppliers_model->getAll();
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_post() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $townHallId = $userData->town;

            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["serviceId"]) && !empty($data["supplier"]) && !empty($data["manager"]) && !empty($data["phone"]) && !empty($data["email"])) {
                $id = uniqid('', true);
                $password = random_string('alnum', 8);
                $supplier = $this->security->xss_clean($data["supplier"]);
                $email = $this->security->xss_clean($data["email"]);
                $phone = $this->security->xss_clean($data["phone"]);

                $isPhone = $this->suppliers_model->find(array('phone' => $phone));
                $isEmail = $this->suppliers_model->find(array('email' => $email));

                if ($isEmail || $isPhone) {
                    $this->response(['Compte existant'], REST_Controller::HTTP_CONFLICT);
                } else {
                    $this->suppliers_model->save(array(
                        'idsupplier' => $id,
                        'townHallId' => $townHallId,
                        'serviceId' => $this->security->xss_clean($data["serviceId"]),
                        'supplier' => $supplier,
                        'manager' => $this->security->xss_clean($data["manager"]),
                        'legalForm' => $this->security->xss_clean($data["legalForm"]),
                        'tradeRegister' => $this->security->xss_clean($data["tradeRegister"]),
                        'taxpayer' => $this->security->xss_clean($data["taxpayer"]),
                        'coverageArea' => $this->security->xss_clean($data["coverageArea"]),
                        'address' => $this->security->xss_clean($data["address"]),
                        'phone' => $phone,
                        'officePhone' => $this->security->xss_clean($data["officePhone"]),
                        'email' => $email,
                        'password ' => cryptage($password)
                    ));


                    $message = "<p>Cher partenaire</p>"
                            . "<p>Le compte de votre entreprise <strong>$supplier</strong> vient d'être créée.<br>"
                            . "Veuillez trouver ci-dessous vos paramètres de connexion </p>"
                            . "<p>Téléphone : <strong>$phone</strong><br>"
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
                    $this->email->subject("CSSS-CARE - Compte Association, Les Paramètres de connexion");
                    $this->email->message($message);
                    $this->email->send();


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
            if (!empty($data["supplier"]) && !empty($data["phone"]) && !empty($data["email"])) {

                $id = $data["idsupplier"] ? $this->security->xss_clean($data["idsupplier"]) : $this->authorization_token->userData()->id;
                $donnee = array(
                    'serviceId' => $this->security->xss_clean($data["serviceId"]),
                    'supplier' => $this->security->xss_clean($data["supplier"]),
                    'manager' => $this->security->xss_clean($data["manager"]),
                    'legalForm' => $this->security->xss_clean($data["legalForm"]),
                    'tradeRegister' => $this->security->xss_clean($data["tradeRegister"]),
                    'taxpayer' => $this->security->xss_clean($data["taxpayer"]),
                    'coverageArea' => $this->security->xss_clean($data["coverageArea"]),
                    'address' => $this->security->xss_clean($data["address"]),
                    'phone' => $this->security->xss_clean($data["phone"]),
                    'officePhone' => $this->security->xss_clean($data["officePhone"]),
                    'email' => $this->security->xss_clean($data["email"]),
                );

                $this->suppliers_model->update($donnee, array('idsupplier' => $id));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function password_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["password"]) && !empty($data["npassword"])) {
                $id = $this->security->xss_clean($id);
                $password = $this->security->xss_clean($data["password"]);
                $npassword = $this->security->xss_clean($data["npassword"]);

                $donnee = array('password' => cryptage($npassword));

                $this->suppliers_model->update($donnee, array('idsupplier' => $id, 'password ' => cryptage($password)));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function town_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            if (isset($id)) {
                $id = $this->security->xss_clean($id);
            } else {
                $id = $userData->town;
            }

            $data = $this->suppliers_model->find(array('townHallId' => $id));

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
