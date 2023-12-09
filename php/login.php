<?php
// login.php
// Include the database connection file
$servername = "localhost";
$username = "root";
$password = "Yash@12345";
$dbname = "";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    // Prepare and execute the SQL statement
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    // Get the result set
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        // User found, check the password
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Password is correct, login successful
            $response = array('status' => 'success', 'message' => 'Login successful.');
        } else {
            // Password is incorrect
            $response = array('status' => 'error', 'message' => 'Incorrect password. Please try again.');
        }
    } else {
        // User not found
        $response = array('status' => 'error', 'message' => 'User not found. Please check your username.');
    }
    // Close the statement and connection
    $stmt->close();
    $conn->close();
    // Send JSON response to the client
    echo json_encode($response);
} else {
    // Invalid request
    header('HTTP/1.1 400 Bad Request');
    exit();
}
?>