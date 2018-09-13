<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: accept, content-type");
header("Access-Control-Allow-Methods: GET, POST");
include 'db_conn.php';


$sql = "DELETE FROM products WHERE id='".$_GET['id']."'";
$result = $conn->query($sql);

$data = array();
if ($result === TRUE) {
	$get_sql = "SELECT * FROM products";
	$result_all = $conn->query($get_sql);
	if ($result_all->num_rows > 0) {
	    // output data of each row
	    $i=0;
	    while($row = $result_all->fetch_assoc()) {
	        $data[$i] = $row;
	        $i++;
	    }
	}
}

echo json_encode($data);

$conn->close();


?>