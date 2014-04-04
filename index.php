<?php
//Code
$events = array(
    (object) array(
        'title' => "Paint Aaron's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1)),
    (object) array(
        'title' => "Paint Brown's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0)),
    (object) array(
        'title' => "Paint Caren's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0)),
    (object) array(
        'title' => "Paint Dan's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1)),
    (object) array(
        'title' => "Paint Evan's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(1)),
    (object) array(
        'title' => "Paint Frank's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(1)),
    (object) array(
        'title' => "Paint Garen's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1, 2)),
    (object) array(
        'title' => "Paint Hank's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1, 2)),
    (object) array(
        'title' => "Paint Ian's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1)),
    (object) array(
        'title' => "Paint Jan's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(2)),
    (object) array(
        'title' => "Paint Karen's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(2)),
    (object) array(
        'title' => "Paint Lan's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(2))
);

// Somewhere in here we interact with the backend, given the POST input provided
$params = json_decode(file_get_contents("php://input"));

if($params->action == 'eventList') {
    if($params->featured) {
        $events = array_slice($events, 4, 4);
    }
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
