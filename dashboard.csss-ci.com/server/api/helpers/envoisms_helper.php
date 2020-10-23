<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');


if (!function_exists('envoisms')) {

    function envoisms($num, $msg, $exp) {
        try {

            // Vos identifiants pour les API
            $idcompte = 1026694;
            $codepin = 52466;

            $url = "http://api.wicdot.com/http/sms/cmd.php?action=editersms&";
            $url .= "idcompte=$idcompte&codepin=$codepin&";
            $url .= "exp=" . urlencode("$exp") . "&msg=" . urlencode($msg) . "&dest=";
            $url .= urlencode($num);
            $url .= "&date_envoi=0&datenvoi=maintenant&directives=envoi";
            $buffer = file($url);
            if (trim($buffer[0]) == "OK") {
                return true;
            } else {
                for ($i == 1; $i < count($buffer); $i++) {
                    $errtext .= $buffer[$i];
                }
                return false;
            }
        } catch (Exception $exc) {
            throw $exc->getTraceAsString();
            exit();
        }
    }

}




/* End of file money_helper.php */
/* Location: ./application/helpers/money_helper.php */