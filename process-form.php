<?php 
$name = $_POST["name"];
$subscribe = filter_input(INPUT_POST, "subscribe", FILTER_VALIDATE_BOOL);

var_dump($name, $subscribe); 
