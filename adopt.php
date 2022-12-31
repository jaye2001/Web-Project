<?php


$db = mysqli_connect('localhost', 'root', '', 'happy_tails');


if (mysqli_connect_errno()) {
  echo 'Failed to connect to the database: ' . mysqli_connect_error();
  exit();
}


$selectBox = $_POST['selectBox'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];


$sql = "INSERT INTO adopt (dog, name, email, phone) VALUES ('$selectBox', '$name', '$email', '$phone')";

// execute
$result = mysqli_query($db, $sql);


if ($result) {
    echo 'Request Successful we will contact you within 24 hours '
} else {
  echo 'There was an error Please Try again later';
}

mysqli_close($db);

?>
