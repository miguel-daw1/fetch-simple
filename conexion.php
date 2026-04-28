<?php
try{
    $conn = new PDO('mysql:host=localhost;dbname=ferreteria', 'root', '');
}
catch(PDOException $e){
    echo "Error: " . $e->getMessage();
}

?>