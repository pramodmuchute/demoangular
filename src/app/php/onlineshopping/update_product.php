<?php



header("Access-Control-Allow-Origin: *");
//header('Content-type: application/x-www-form-urlencoded');
header("Access-Control-Allow-Headers: accept, content-type");
header("Access-Control-Allow-Methods: GET, POST");

include 'db_conn.php';
$postdata = json_decode(file_get_contents("php://input"), true);
$cate = $postdata['category'];
$sql = "UPDATE products SET title ='".$postdata['title']."', price ='".$postdata['price']."',
							category_id ='".$cate."', imageUrl ='".$postdata['imageUrl']."' WHERE id='".$_GET['id']."'";
$conn->query($sql);
//echo json_decode($_GET['id']);
print_r($postdata);
$conn->close();


?>