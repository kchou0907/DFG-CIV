<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');


if (!function_exists('envoivoice')) {

    function envoivoice($num, $msg) {
        try {

            // Vos identifiants pour les API
            $idcompte = 1026694;
            $codepin = 52466;
            $exp = '22559709416';

            $url = "https://apisms.wicdot.com/http/sms/cmd.php?action=envoyervoice&";
            $url .= "idcompte=$idcompte&codepin=$codepin&";
            $url .= "exp=" . urlencode("$exp") . "&msg=" . urlencode($msg) . "&dest=";
            $url .= urlencode($num);
            $url .= "&date_envoi=0&datenvoi=maintenant&directives=envoi&type=2&duree=90";

            $buffer = file($url);
            $var = json_decode($buffer);
            if ($var->res == "OK") {
                return true;
            } else {
                $errtext = $buffer[$i];
                return false;
            }
        } catch (Exception $exc) {
            throw $exc->getMessage();
        }
    }

}

    /* End of file money_helper.php */
    /* Location: ./application/helpers/money_helper.php */    