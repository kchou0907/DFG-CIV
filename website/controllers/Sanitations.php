<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Sanitations extends CI_Controller {

    private $_page = "sanitations/";

    public function __construct() {
        parent::__construct();
    }

    public function index() {
        $data['title'] = "Pour un cadre de vie sain";
        $data['active'] = 'home';
        $this->template->load('Sanitations', $this->_page . 'index', $data);
    }

    public function about() {
        $data['title'] = "Qui sommes-nous ?";
        $data['active'] = 'about';
        $this->template->load('Sanitations', $this->_page . 'about', $data);
    }

    public function project() {
        $data['title'] = "Le projet CSSS";
        $data['active'] = 'project';
        $this->template->load('Sanitations', $this->_page . 'project', $data);
    }

    public function sanitation() {
        $data['title'] = "Assainissement";
        $data['active'] = 'sanitation';
        $this->template->load('Sanitations', $this->_page . 'sanitation', $data);
    }

    public function households() {
        $data['title'] = "Ménages";
        $data['active'] = 'households';
        $this->template->load('Sanitations', $this->_page . 'households', $data);
    }

    public function banks() {
        $data['title'] = "Banques";
        $data['active'] = 'banks';
        $this->template->load('Sanitations', $this->_page . 'banks', $data);
    }

    public function townhalls() {
        $data['title'] = "Mairies";
        $data['active'] = 'townhalls';
        $this->template->load('Sanitations', $this->_page . 'townhalls', $data);
    }

    public function contact() {
        $data['title'] = "Nous Contacter";
        $data['active'] = 'contact';

        $this->form_validation->set_rules('name', "Nom et Prenoms", 'trim|required');
        $this->form_validation->set_rules('email', "Adresse e-mail", 'trim|required|valid_email');
        $this->form_validation->set_rules('object', "Object", 'trim|required');
        $this->form_validation->set_rules('message', "Message", 'trim|required');

        if ($this->form_validation->run()) {
            $name = $this->input->post('name', TRUE);
            $email = $this->input->post('email', TRUE);
            $object = $this->input->post('object', TRUE);
            $message = $this->input->post('message', TRUE);

            $config = array();
            $config['protocol'] = 'mail';
            $config['mailpath'] = '/usr/sbin/sendmail';
            $config['charset'] = 'utf-8';
            $config['mailtype'] = 'html';
            $config['newline'] = "\r\n";
            $config['wordwrap'] = TRUE;
            $this->email->initialize($config);

            $this->email->clear();
            $this->email->from($email, $name, $email);
            $this->email->to('stanislas.toure@care.org');
            $this->email->subject($object);
            $this->email->message($message);
            $this->email->send();

            $this->session->set_flashdata('success', "Message envoyé avec succès");
            redirect($this->input->server('HTTP_REFERER'));
        } else {
            $this->session->set_flashdata('error', validation_errors());
        }
        $this->template->load('Sanitations', $this->_page . 'contact', $data);
    }

}
