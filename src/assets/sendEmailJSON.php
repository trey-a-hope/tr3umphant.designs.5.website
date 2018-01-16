<?php
	$rest_json	= file_get_contents("php://input");
	$_POST 		= json_decode($rest_json, true);

	$to      	= $_POST['to'];
	$subject 	= $_POST['subject'];
	$message 	= $_POST['message'];
	$headers 	= 'From: '.$_POST['from'];

	$result 	= mail($to, $subject, $message, $headers);

	if($result){
			print json_encode($result);
	}else{
		die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
	}   
?> 
