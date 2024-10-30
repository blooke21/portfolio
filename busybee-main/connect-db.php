<?php

$dsn = "mysql:host=localhost;dbname=yqsgdfnn_busy_bee";
$username = "yqsgdfnn_bee";
$password = "sapwiq-qevxI0-xiwgug";

try {
    $db = new PDO($dsn, $username, $password);
} catch (Exception $e) {
    $error = $e->getMessage();
    echo $error;
    exit();
}