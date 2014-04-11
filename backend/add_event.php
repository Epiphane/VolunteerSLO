<?php

include "mysqlconnect.php";
include "util.php";

if (!isset($result)) {
    echo "MySQL didn't load correctly :(";
}
else {
    $loggedIn = true;
    if ($loggedIn) {
        $headers = getallheaders();

        $title = $headers["title"];
        $description = $headers["description"];
        $img_url = $headers["img_url"];
        $max_volunteers = $headers["max_volunteers"];
        
        if (!check_if_set($title, $description, $img_url, $max_volunteers)) {
            echo '[{test: "Malformed request, yo"}]';
        }
        else {
            // Some argument error checking
            if (!preg_match("/-?\d+$/", $max_volunteers)) {
                echo "Didn't put a number for max_volunteers";
            }
            else {
                insert_event($mysqli, $title, $description, $img_url, $max_volunteers);
            }
        }
    }
}

function insert_event($mysqli, $title, $description, $img_url, $max_volunteers) {
    if (!$stmnt = $mysqli->prepare("INSERT INTO `events` (`title`, `description`, `img_url`, `max_volunteers`, `event_id`) ".
        "VALUES (?, ?, ?, ?, NULL)")) {
        echo "Oh no! Mad errors!\n";
    }
    else {
        $stmnt->bind_param("sssd", $title, $description, $img_url, $max_volunteers);
        
        $stmnt->execute();
        var_dump($stmnt);
        
        if ($stmnt->affected_rows < 0) {
            printf("Uh oh error! %d", $mysqli->connect_errno);
        }
        else {
            printf("%d Row inserted.\n", mysqli_stmt_affected_rows($stmnt));
        }
    }
}
