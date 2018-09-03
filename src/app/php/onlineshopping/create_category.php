<?php



header("Access-Control-Allow-Origin: *");
//header('Content-type: application/x-www-form-urlencoded');
header("Access-Control-Allow-Headers: accept, content-type");
header("Access-Control-Allow-Methods: GET, POST");

include 'db_conn.php';
$postdata = json_decode(file_get_contents("php://input"), true);

$sql = "INSERT INTO products (`title`,`price`,`category_id`,`imageUrl`) VALUES ('".$postdata['title']."', '".$postdata['price']."', '".$postdata['category']."','".$postdata['imageUrl']."');";
$conn->query($sql);

print_r($postdata);
$conn->close();


?>