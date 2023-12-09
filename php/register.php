<?php
// Get data from the registration form
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$Phone_number = $_POST['Phone_number'];
$dob = $_POST['dob'];

// Create a connection to the database

$conn = new mysqli('localhost', 'root','','test');

// Check the connection
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}
else{
    

// Use prepared statement to insert data into the database
$stmt = $conn->prepare("INSERT INTO User_Registration (email, password , name, Phone_number, dob) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssis", $email, $password, $name, $Phone_number, $dob);

if ($stmt->execute()) {
    echo " Registration Successfull!!!....";
} else {
    echo " Registration Failed....";
}

$stmt->close();
$conn->close();
}

?>