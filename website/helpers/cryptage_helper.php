<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');


if (!function_exists('cryptage')) {

    function cryptage($pwd) {
        $password = '89265ts89e34f67f67u' . $pwd . '759lijcrd9t3y84u7x5q6';
        return hash('sha512', $password);
    }

}
    



/* End of file formatage_helper.php */
/* Location: ./application/helpers/formatage_helper.php */