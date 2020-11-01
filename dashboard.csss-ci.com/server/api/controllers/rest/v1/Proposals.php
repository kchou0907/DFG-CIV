<?php

require 'header.php';

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

/**
 * Class for Proposals API
 */
class Proposals extends REST_Controller {

    /**
     * Invokes the parent class's constructor 
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Gets the index of the proposal
     *
     * @param Integer $id - integer for identification number, id = 0 if none is specified 
     */
    public function index_get($id = 0) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            if (!empty($id)) {
                $data = $this->proposals_model->find(array('idproposal' => $id));
            } else {
                $data = $this->proposals_model->getAll();
            }
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Updates the proposal model with proposal information if all necessary fields are valid, otherwise throws an error  
     */
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
                $need = $this->needs_model->find(array('idneed' => $needId));
                foreach ($need as $n) {
                    $householdId = $n->householdId;
                    $associationId = $n->associationId;
                }
                $avec = $this->associations_model->find(array('idassociation' => $associationId));
                foreach ($avec as $a) {
                    $message = "<p>Cher Partenaire, </p>"
                            . "<p>Un fournisseur vient de repondre à votre besoin.<br>"
                            . "Veuillez connecter pour afin d'avoir plus detail.</p>"
                            . "<p><br>L'Administrateur</p>";
                    $objet = "Un fournisseur vient de repondre à votre besoin";
                    $this->sendMail($a->email, $message, $objet);
                }

                $officers = $this->officers_model->getAll();
                foreach ($officers as $o) {
                    $message = "<p>Cher Partenaire, </p>"
                            . "<p>Un fournisseur vient de repondre à un besoin.<br>"
                            . "Veuillez connecter pour afin d'avoir plus detail.</p>"
                            . "<p><br>L'Administrateur</p>";
                    $objet = "Un fournisseur vient de repondre à un besoin";

                    $this->sendMail($o->email, $message, $objet);
                }

                $this->response([$id], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Inserts quotation entry to proposals model database if all necessary fields are valid, otherwise throws an error  
     */
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

    /**
     * Deletes an entry in the proposals model if there is authorization to do so, otherwise throws an error  
     *
     * @param Integer $id - id number of quotation to be deleted 
     */
    public function index_delete($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {

            $this->db->trans_start();
            $this->db->trans_strict(FALSE);

            $this->quotations_model->delete(array('proposalId' => $id));

            $this->proposals_model->delete(array('idproposal' => $id));

            $this->db->trans_complete();

            if ($this->db->trans_status() === FALSE) {
                $this->db->trans_rollback();
                $this->response(['status' => false, 'message' => 'Forbidden'], REST_Controller::HTTP_FORBIDDEN);
            } else {
                $this->db->trans_commit();
                $this->response(['Success'], REST_Controller::HTTP_OK);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Inserts visit entry into the proposals model database if all necessary fields are valid, otherwise throws an error  
     */
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

    /**
     * Inserts certification ifnormation into the proposals model database if all necessary fields are valid, otherwise throws an error  
     */
    public function certified_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idproposal"]) && !empty($data["certified"])) {
                $idproposal = $this->security->xss_clean($data["idproposal"]);
                $certified = $this->security->xss_clean($data["certified"]);
                $this->proposals_model->update(array('certified' => intval($certified)), array('idproposal' => $idproposal));
                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Inserts selected information into the proposals model database if all necessary fields are valid, otherwise throws an error  
     */
    public function selected_put() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!empty($data["idproposal"])) {
                $idproposal = $this->security->xss_clean($data["idproposal"]);
                $proposal = $this->proposals_model->find(array('idproposal' => $idproposal));

                foreach ($proposal as $p) {
                    $idneed = $p->idneed;
                    $email = $p->email;
                }
                $this->proposals_model->update(array('selected' => true), array('idproposal' => $idproposal));
                $this->needs_model->update(array('status' => 1), array('idneed' => $idneed));

                $message = "<p>Cher Partenaire, </p>"
                        . "<p>Votre proposition vient d'être retenu.<br>"
                        . "Veuillez connecter pour afin d'avoir plus detail.</p>"
                        . "<p><br>L'Administrateur</p>";
                $objet = "Proposition retenue";

                $this->sendMail($email, $message, $objet);

                $this->response(['Success'], REST_Controller::HTTP_OK);
            } else {
                $this->response(['Bad Request'], REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Inserts work end date information into the proposals model database if all necessary fields are valid, otherwise throws an error  
     */
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

    /**
     * Inserts observation entry into the proposals model database if all necessary fields are valid, otherwise throws an error  
     */
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

    /**
     * Inserts visit entry into the proposals model database if all necessary fields are valid, otherwise throws an error  
     *
     * @param Integer $id - integer for identification number, id = 0 if none is specified 
     */
    public function submission_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $data = $this->proposals_model->find(array('needId' => $id, 'supplierId' => $userData->id));

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Finds the desired need id in the proposals model
     *
     * @param Integer $id - integer for identification number, id = 0 if none is specified 
     */
    public function need_get($id) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $selected = $this->proposals_model->find(array('needId' => $id, 'selected' => true));
            if ($selected) {
                $data = $selected;
            } else {
                $data = $this->proposals_model->find(array('needId' => $id));
            }

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Finds the specified user's proposals
     *
     * @param Integer $id - integer for user id, id = null if none is specified 
     */
    public function myProposals_get($id = null) {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $id = $this->security->xss_clean($id) ? $id : $userData->id;
            $data = $this->proposals_model->find(array('supplierId' => $id));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Gets association id from the households model 
     */
    public function association_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();

            $data = array();
            $households = $this->households_model->find(array('associationId' => $userData->id));
            foreach ($households as $h) {
                $needs = $this->needs_model->find(array('householdId' => $h->idhousehold));
                foreach ($needs as $n) {
                    $data += $this->proposals_model->find(array('needId' => $n->idneed));
                }
            }

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Gets association projects from the households model
     */
    public function associationProjects_get() {
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

    /**
     * Gets the last five associations from the proposals model
     */
    public function associationLast_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();

            $data = array();
            $households = $this->households_model->find(array('associationId' => $userData->id));
            foreach ($households as $h) {
                $needs = $this->needs_model->find(array('householdId' => $h->idhousehold));
                foreach ($needs as $n) {
                    $data += $this->proposals_model->show(array('needId' => $n->idneed, 'selected' => false), 5);
                }
            }

            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Gets the town hall data from the proposals model
     */
    public function town_get() {
        $is_valid_token = $this->authorization_token->validateToken();
        if (!empty($is_valid_token) and $is_valid_token['status'] === TRUE) {
            $userData = $this->authorization_token->userData();
            $id = $userData->town;
            $data = $this->proposals_model->find(array('townHallId' => $id));
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['status' => FALSE, 'message' => $is_valid_token['message']], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    /**
     * Sends an email to the email address specified with desired message and subject header
     *
     * @param String $email - Email address string
     * @param String $message - Message of email 
     * @param String $objet - Subject line of email
     */
    private function sendMail($email, $message, $objet) {
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
        $this->email->subject("CSSS-CARE - $objet");
        $this->email->message($message);
        $this->email->send();
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
