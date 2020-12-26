<?php


ob_start();
session_start();

try {
	$db = new PDO("mysql:host=localhost;dbname=portfolio;charset=utf8;","root","");
	
} catch (PDOException $e) {
	print $e->getMessage();
	
}

	$site = $db->prepare("SELECT * FROM ayarlar WHERE id=:id");
	$site->execute(["id" => 0]);

	$row = $site->fetch(PDO::FETCH_OBJ);

if (@$_SESSİON["oturum"] = false) {
   
header("location:login.php");
}


?>