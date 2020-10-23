<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');


if (!function_exists('datelimit')) {

    function datelimit($dateDepart, $duree, $typeDelais = 'day') {
        //date de départ : 01 avril 2013
//la première étape est de transformer cette date en timestamp
        $dateDepartTimestamp = strtotime($dateDepart);

//on calcule la date de fin
        $dateFin = date('Y-m-d', strtotime('+' . $duree * 31 . $typeDelais, $dateDepartTimestamp));
        return $dateFin;
    }

}
    



/* End of file formatage_helper.php */
/* Location: ./application/helpers/formatage_helper.php */