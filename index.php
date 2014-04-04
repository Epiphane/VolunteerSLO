<?php
//Code

// Somewhere in here we interact with the backend, given the POST input provided
$params = json_decode(file_get_contents("php://input"));

if($params->action == 'eventList') {
    $eventParams = $params->params;

    ?>
[
    { "id": 0, "title": "Paint Aaron's fence!", "description": "Let's all go paint a fence!",
    "volunteers": 9, "signedUp": 6, "categories": [0, 1] },
    { "id": 0, "title": "Paint Ban's fence!", "description": "Let's all go paint a fence!",
    "volunteers": 9, "signedUp": 6, "categories": [1] },
    { "id": 0, "title": "Paint Cran's fence!", "description": "Let's all go paint a fence!",
    "volunteers": 9, "signedUp": 6, "categories": [1] },
    { "id": 0, "title": "Paint Dan's fence!", "description": "Let's all go paint a fence!",
    "volunteers": 9, "signedUp": 6, "categories": [0, 1] },
    { "id": 0, "title": "Paint Evan's fence!", "description": "Let's all go paint a fence!",
    "volunteers": 9, "signedUp": 6, "categories": [0] },
    { "id": 0, "title": "Paint Fan's fence!", "description": "Let's all go paint a fence!",
    "volunteers": 9, "signedUp": 6, "categories": [0] }
]
<?
}
?>
