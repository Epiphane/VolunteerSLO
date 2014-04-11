<?php

if (!file_exists("./.config")) {
    echo "You need a /backend/.config file!\n";
}
else {
    $file = explode("\n", file_get_contents("./.config"));
    $username = $file[0];
    $password = $file[1];
    $mysqli = new mysqli("elliot.db", $username, $password, "volunteer");
    if ($mysqli->connect_errno) {
    
        //then I guess we're on localhost?
        $mysqli = new mysqli("127.0.0.1", "root", NULL, "volunteer", 3306);
        
        echo "welcome to localhost!".PHP_EOL;
        if($mysqli->connect_errno) {
            //OH NO, GUESS NOT, PANIC TIME NOOOOOO
            echo "SOMETHING AWFUL JUST HAPPENED PLEASE EMAIL ME THE FOLLOWING ERROR MESSAGE: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
        }
    }

    if($result = $mysqli->query("SELECT * FROM `events` WHERE 1")) {
       $result->close();
    } else {
       printf("WELL WHAT THE HECK DID YOU DO NOW\n");
    }
}
?>
