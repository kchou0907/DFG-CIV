<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Verification {

    public function __construct() {
        $this->CI = & get_instance();
    }

    public function authorization() {
  $headers = apache_response_headers();
        try {
          
            if (isset($headers['Authorization'])) {
                $token = trim(substr($headers['Authorization'], 7));
                $data = AUTHORIZATION::validateTimestamp($token);
                if ($data === false) {
                    return false;
                } else {
                    return $data;
                }
            } else {
                 return false;
            }
        } catch (Exception $e) {
            throw $e->getMessage();
        }
    }

}

/* End of file Verification.php */
/* Location: ./system/application/libraries/Verification.php */