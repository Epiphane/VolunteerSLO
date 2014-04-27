<?php

include "mysqlconnect.php";
include "util.php";

$events = array(
    (object) array(
        'title' => "Paint Aaron's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1)),
    (object) array(
        'title' => "Paint Brown's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0)),
    (object) array(
        'title' => "Paint Caren's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0)),
    (object) array(
        'title' => "Paint Dan's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1)),
    (object) array(
        'title' => "Paint Evan's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(1)),
    (object) array(
        'title' => "Paint Frank's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(1)),
    (object) array(
        'title' => "Paint Garen's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1, 2)),
    (object) array(
        'title' => "Paint Hank's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1, 2)),
    (object) array(
        'title' => "Paint Ian's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(0, 1)),
    (object) array(
        'title' => "Paint Jan's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(2)),
    (object) array(
        'title' => "Paint Karen's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_2.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(2)),
    (object) array(
        'title' => "Paint Lan's fence!",
        'description' => "Let's all go paint a fence!",
        'img_url' => 'http://localhost/VolunteerSLO/img/event_1.jpg',
        'organizer' => 'Alpha Kappa Psi',
        'volunteers' => 9,
        'signedUp' => 6,
        'categories' => array(2))
);

print json_encode($events);

