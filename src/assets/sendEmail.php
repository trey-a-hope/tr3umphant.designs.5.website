<?php
 	// header('Access-Control-Allow-Origin: *');  

	$to      = $_POST['to'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$headers = 'From: '.$_POST['from'];

	$result = mail($to, $subject, $message, $headers);

	if($result){
			print json_encode($result);
	}else{
		die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
	}   
?> 
