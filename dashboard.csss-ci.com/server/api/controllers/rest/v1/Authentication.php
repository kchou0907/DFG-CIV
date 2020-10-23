<?php

require_once 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Authentication extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_post() {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data["email"]) && !empty($data["password"])) {
            $pseudo = $this->security->xss_clean($data["email"]);
            $password = $this->security->xss_clean($data["password"]);
            $where = array('email' => $pseudo, 'password' => cryptage($password));
            $orWhere = array('phone' => $pseudo, 'password' => cryptage($password));

            $association = $this->associations_model->find($orWhere);
            $association2 = $this->associations_model->find($where);
            $admin = $this->admins_model->find($where); //, 'connected' => false
            $admin2 = $this->admins_model->find($orWhere);
            $officer = $this->officers_model->find($where); //, 'connected' => false
            $officer2 = $this->officers_model->find($orWhere);

            $supplier = $this->suppliers_model->find($where);
            $supplier2 = $this->suppliers_model->find($orWhere);
            $banker = $this->bankers_model->find($where);
            $banker2 = $this->bankers_model->find($orWhere);

            if ($admin || $admin2 || $officer || $officer2 || $association || $association2 || $supplier || $supplier2 || $banker || $banker2) {

                if ($admin || $admin2) {
                    if ($admin) {
                        foreach ($admin as $a) {
                            $id = $a->idadmin;
                            $name = $a->admin;
                            $town = '';
                            $role = 'admin';
                        }
                    } else {
                        foreach ($admin2 as $a) {
                            $id = $a->idadmin;
                            $name = $a->admin;
                            $town = '';
                            $role = 'admin';
                        }
                    }

                    $this->admins_model->update(
                            array('connected' => true, 'connectedDate' => date('Y-m-d H:i:s')),
                            array('idadmin' => $id));
                } elseif ($officer || $officer2) {
                    if ($officer) {
                        foreach ($officer as $o) {
                            $id = $o->idofficer;
                            $town = $o->townHallId;
                            $name = $o->officer;
                            $role = $o->role;
                        }
                    } else {
                        foreach ($officer2 as $o) {
                            $id = $o->idofficer;
                            $town = $o->townHallId;
                            $name = $o->officer;
                            $role = $o->role;
                        }
                    }

                    $this->officers_model->update(
                            array('connected' => true, 'connectedDate' => date('Y-m-d H:i:s')),
                            array('idofficer' => $id
                    ));
                } elseif ($association || $association2) {
                    if ($association) {
                        foreach ($association as $a) {
                            $id = $a->idassociation;
                            $town = $a->townHallId;
                            $name = $a->association;
                            $role = 'avec';
                        }
                    } elseif ($association2) {
                        foreach ($association2 as $a) {
                            $id = $a->idassociation;
                            $town = $a->townHallId;
                            $name = $a->association;
                            $role = 'avec';
                        }
                    }

                    $this->associations_model->update(
                            array('connected' => true, 'connectedDate' => date('Y-m-d H:i:s')),
                            array('idassociation' => $id));
                } elseif ($supplier || $supplier2) {
                    if ($supplier) {
                        foreach ($supplier as $s) {
                            $id = $s->idsupplier;
                            $town = $s->townHallId;
                            $name = $s->manager;
                            $role = 'supplier';
                        }
                    } else {
                        foreach ($supplier2 as $s) {
                            $id = $s->idsupplier;
                            $town = $s->townHallId;
                            $name = $s->manager;
                            $role = 'supplier';
                        }
                    }

                    $this->suppliers_model->update(array('connectedDate' => date('Y-m-d H:i:s')), array('idsupplier' => $id));
                } elseif ($banker || $banker2) {
                    if ($banker) {
                        foreach ($banker as $o) {
                            $id = $o->idbanker;
                            $town = $o->bankId;
                            $name = $o->banker;
                            $role = 'banker';
                        }
                    } else {
                        foreach ($banker2 as $o) {
                            $id = $o->idbanker;
                            $town = $o->bankId;
                            $name = $o->banker;
                            $role = 'banker';
                        }
                    }
                }


                $tokenData['iss'] = "csss-ci.com";
                $tokenData['id'] = $id;
                $tokenData['name'] = $name;
                $tokenData['role'] = $role;
                $tokenData['town'] = $town;
                $tokenData['time'] = time();

                $user_token = $this->authorization_token->generateToken($tokenData);

                $output['token'] = $user_token;
                $output['id'] = $id;
                $output['name'] = $name;
                $output['role'] = $role;
                $output['town'] = $town;

                $this->set_response($output, REST_Controller::HTTP_OK);
            } else {
                $this->response(['status' => FALSE, 'message' => "Invalid Username or Password"], REST_Controller::HTTP_NOT_FOUND);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => "Invalid Username or Password"], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function index_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $user = $this->authorization_token->userData();

            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["oldPassword"]) && !empty($data["password"])) {
                $oPassword = $this->security->xss_clean($data["oldPassword"]);
                $password = $this->security->xss_clean($data["password"]);

                if ($user->role == 'admin') {
                    $this->admins_model->update(array('password' => cryptage($password)), array('idadmin' => $user->id, 'password' => cryptage($oPassword)));
                } elseif ($user->role == 'officer') {
                    $this->officers_model->update(array('password' => cryptage($password)), array('idadmin' => $user->id, 'password' => cryptage($oPassword)));
                } elseif ($user->role == 'avec') {
                    $this->associations_model->update(array('password' => cryptage($password)), array('idadmin' => $user->id, 'password' => cryptage($oPassword)));
                } elseif ($user->role == 'supplier') {
                    $this->suppliers_model->update(array('password' => cryptage($password)), array('idadmin' => $user->id, 'password' => cryptage($oPassword)));
                } elseif ($user->role == 'banker') {
                    $this->bankers_model->update(array('password' => cryptage($password)), array('idadmin' => $user->id, 'password' => cryptage($oPassword)));
                }

                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['status' => FALSE, 'message' => "Champs obligatoires"], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function user_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $user = $this->authorization_token->userData();
            $this->response($user, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function password_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) AND $is_valid_token['status'] === TRUE) {
            $user = $this->authorization_token->userData();

            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["oldPassword"]) && !empty($data["password"])) {

                $oPassword = $this->security->xss_clean($data["oldPassword"]);
                $password = $this->security->xss_clean($data["password"]);

                if ($user->role == 'admin') {
                    $r = $this->admins_model->find(array('idadmin' => $user->id, 'password' => cryptage($oPassword)));
                    if ($r) {
                        $this->admins_model->update(array('password' => cryptage($password)), array('idadmin' => $user->id));
                        $this->response(['Success'], REST_Controller::HTTP_OK);
                    } else {
                        $this->response(['status' => FALSE, 'message' => "Compte introuvable"], REST_Controller::HTTP_NOT_FOUND);
                    }
                } elseif ($user->role == 'officer') {
                    $r = $this->officers_model->find(array('idofficer' => $user->id, 'password' => cryptage($oPassword)));
                    if ($r) {
                        $this->officers_model->update(array('password' => cryptage($password)), array('idofficer' => $user->id));
                        $this->response(['Success'], REST_Controller::HTTP_OK);
                    } else {
                        $this->response(['status' => FALSE, 'message' => "Compte introuvable"], REST_Controller::HTTP_NOT_FOUND);
                    }
                } elseif ($user->role == 'avec') {
                    $r = $this->associations_model->find(array('idassociation' => $user->id, 'password' => cryptage($oPassword)));
                    if ($r) {
                        $this->associations_model->update(array('password' => cryptage($password)), array('idassociation' => $user->id));
                        $this->response(['Success'], REST_Controller::HTTP_OK);
                    } else {
                        $this->response(['status' => FALSE, 'message' => "Compte introuvable"], REST_Controller::HTTP_NOT_FOUND);
                    }
                } elseif ($user->role == 'supplier') {
                    $r = $this->suppliers_model->find(array('idsupplier' => $user->id, 'password' => cryptage($oPassword)));
                    if ($r) {
                        $this->suppliers_model->update(array('password' => cryptage($password)), array('idsupplier' => $user->id));
                        $this->response(['Success'], REST_Controller::HTTP_OK);
                    } else {
                        $this->response(['status' => FALSE, 'message' => "Compte introuvable"], REST_Controller::HTTP_NOT_FOUND);
                    }
                } elseif ($user->role == 'banker') {
                    $r = $this->bankers_model->find(array('idbanker' => $user->id, 'password' => cryptage($oPassword)));
                    if ($r) {
                        $this->bankers_model->update(array('password' => cryptage($password)), array('idbanker' => $user->id));
                        $this->response(['Success'], REST_Controller::HTTP_OK);
                    } else {
                        $this->response(['status' => FALSE, 'message' => "Compte introuvable"], REST_Controller::HTTP_NOT_FOUND);
                    }
                }
            } else {
                $this->response(['status' => FALSE, 'message' => "Champs obligatoires"], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_UNAUTHORIZED);
        }
    }

    public function reset_put() {

        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data['token']) && !empty($data['password'])) {
            $token = $this->security->xss_clean($data["token"]);
            $password = $this->security->xss_clean($data["password"]);
            $where = array('token' => $token);

            $admin = $this->admins_model->find($where);
            $officer = $this->officers_model->find($where);
            $association = $this->associations_model->find($where);
            $supplier = $this->suppliers_model->find($where);
            $banker = $this->bankers_model->find($where);

            if ($admin || $officer || $association || $supplier || $banker) {
                $update = array('password' => cryptage($password), 'token' => null);
                if ($admin) {
                    $this->admins_model->update($update, $where);
                } elseif ($officer) {
                    $this->officers_model->update($update, $where);
                } elseif ($association) {
                    $this->associations_model->update($token, $where);
                } elseif ($supplier) {
                    $this->suppliers_model->update($update, $where);
                } elseif ($banker) {
                    $this->bankers_model->update($update, $where);
                }

                $this->set_response(['success'], REST_Controller::HTTP_OK);
            } else {
                $this->set_response("Not Found", REST_Controller::HTTP_NOT_FOUND);
            }
        } else {
            $this->set_response(['E-mail obligatoire'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function forgot_put() {

        $data = json_decode(file_get_contents('php://input'), true);

        if (filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {
            $email = $this->security->xss_clean($data["email"]);
            $where = array('email' => $email);
            $password = random_string('alnum', 8);
            $admin = $this->admins_model->find($where);
            $officer = $this->officers_model->find($where);
            $association = $this->associations_model->find($where);
            $supplier = $this->suppliers_model->find($where);
            $banker = $this->bankers_model->find($where);

            $update = array('password' => cryptage($password));

            if ($admin) {
                $this->admins_model->update($update, $where);
                $this->sendMail($email, $password);
                $this->set_response(['success'], REST_Controller::HTTP_OK);
            } elseif ($officer) {
                $this->officers_model->update($update, $where);
                $this->sendMail($email, $password);
                $this->set_response(['success'], REST_Controller::HTTP_OK);
            } elseif ($association) {
                $this->associations_model->update($update, $where);
                $this->sendMail($email, $password);
                $this->set_response(['success'], REST_Controller::HTTP_OK);
            } elseif ($supplier) {
                $this->suppliers_model->update($update, $where);
                $this->sendMail($email, $password);
                $this->set_response(['success'], REST_Controller::HTTP_OK);
            } elseif ($banker) {
                $this->bankers_model->update($update, $where);
                $this->sendMail($email, $password);
                $this->set_response(['success'], REST_Controller::HTTP_OK);
            } else {
                $this->set_response("Not Found", REST_Controller::HTTP_NOT_FOUND);
            }
        } else {
            $this->set_response(['E-mail obligatoire'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    private function sendMail($email, $password) {


        $message = "<p>Cher Partenaire, </p>"
                . "<p>Vous avez demandé à réinitialiser votre mot de passe.<br>"
                . "Veuillez trouver ci-dessous notre nouveau mot de passe pour l'e-mail <strong>$email</strong>.</p>"
                . "<p style='display: inline-block; background-color: #9E9D24; color: #fff; font-weight: 700; padding: 15px 25px; border: none; border-radius: 4px; margin: 20px;'>$password</p>"
                . "<p><i>Si vous rencontrez un problème, n'hésitez pas à contacter l'administrateur.</i></p>"
                . "<p><br>L'Administrateur</p>";

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
        $this->email->subject("CSSS-CARE - Demande de réinitialisation de mot de passe");
        $this->email->message($message);
        $this->email->send();
    }

    public function index_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK);
    }

}
