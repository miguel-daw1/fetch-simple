<?php
require("conexion.php");

$stmt= $conn->prepare("SELECT * FROM stock");
$stmt->execute();
$resultado= $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($resultado);


?>