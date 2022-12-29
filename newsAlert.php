<?php


$host = "localhost";
$user = "root";
$password = "";
$dbname = "happy_tails";

try {
    $conn = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


$name = $_POST['name'];
$email = $_POST['email'];


$sql = "INSERT INTO news-alert(name, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bindValue(1, $name, PDO::PARAM_STR);
$stmt->bindValue(2, $email, PDO::PARAM_STR);
$stmt->execute();

echo "Form data submitted successfully!";

?>
