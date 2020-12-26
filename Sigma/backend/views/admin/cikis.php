<?php
session_start();
session_destroy();
session_unset();
$_SESSİON["oturum"]; 
// Redirect to the login page:
header('Location: login.php');
?>