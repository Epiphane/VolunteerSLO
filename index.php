<?php
//Code
$events = array(
    (object) array(
        'title' => "Paint Aaron's fence!",
        'description' => "Let's all go paint a fence!",
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1)),
    (object) array(
        'title' => "Paint Brown's fence!",
        'description' => "Let's all go paint a fence!",
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0)),
    (object) array(
        'title' => "Paint Caren's fence!",
        'description' => "Let's all go paint a fence!",
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0)),
    (object) array(
        'title' => "Paint Dan's fence!",
        'description' => "Let's all go paint a fence!",
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1)),
    (object) array(
        'title' => "Paint Evan's fence!",
        'description' => "Let's all go paint a fence!",
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(1)),
    (object) array(
        'title' => "Paint Frank's fence!",
        'description' => "Let's all go paint a fence!",
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(1))
);

// Somewhere in here we interact with the backend, given the POST input provided
$params = json_decode(file_get_contents("php://input"));

if($params->action == 'eventList') {
    $eventParams = $params->params;

    echo "[";
    foreach($events as $index=>$event) {
        $event->id = $index;
        if($index > 0)
            echo ",";
        echo json_encode($event);
    }
    echo "]";
    ?>
<?
}
elseif($params->action == 'event') {
    if($params->id >= 0 && $params->id < count($events)) {
        echo json_encode($events[$params->id]);
    }
}
?>
