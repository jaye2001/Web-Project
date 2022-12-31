<?php

$db = mysqli_connect('localhost', 'root', '', 'happy_tails');


if (mysqli_connect_errno()) {
  echo 'Failed to connect to the database: ' . mysqli_connect_error();
  exit();
}


$email = $_POST['email'];
$name = $_POST['name'];


$sql = "INSERT INTO news-alert (email, name) VALUES ('$email', '$name')";

// execute
$result = mysqli_query($db, $sql);

?>
