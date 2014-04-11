<?php

function check_if_set() {
    $result = true;

    $argv = func_num_args();
    $arg_list = func_get_args();
    $arg_names = get_func_argNames("check_if_set");
    
    for ($i = 0; $i < $argv; $i++) {
        if (!isset($arg_list[$i])) {
//            echo "Parameter $i not set!<br>";
 //           printf(PHP_EOL);
            
            $result = false;
        }
    }
    
    return $result;
}

function get_func_argNames($funcName) {
    $f = new ReflectionFunction($funcName);
    $result = array();
    foreach ($f->getParameters() as $param) {
        $result[] = $param->name;   
    }
    return $result;
}
