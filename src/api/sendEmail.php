<?php
	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

	//Get passed parameters.
    $to         = $_POST['to'];
    $from       = $_POST['from'];
    $subject    = $_POST['subject'];
    $message    = $_POST['message'];
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ' . $from . "\r\n";

	//Send email.
	$result = @mail($to, $subject, $message, $headers);

    if($result){
		print json_encode($result);
	}else{
		die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
	}   
?>