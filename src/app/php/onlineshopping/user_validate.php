<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: accept, content-type");
header("Access-Control-Allow-Methods: GET, POST");

include 'db_conn.php';
$postdata = json_decode(file_get_contents("php://input"), true);

if(!empty($postdata['username']) && !empty($postdata['password'])){
	$sql = "SELECT id, firstname, lastname, username, role FROM users WHERE username='".$postdata['username']."' AND password='".$postdata['password']."'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		$row = $result->fetch_assoc();
	    echo json_encode($row);
	}else{
		echo json_encode(null);
	}
}else{
	echo json_encode(null);
}




//echo json_encode($data);

$conn->close();


?>