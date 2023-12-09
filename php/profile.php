<?php




$con=new mysqli("localhost", "root", "", "test");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming session has been started
session_start();

if (!isset($_SESSION['email'])) {
    echo json_encode(['message' => 'Unauthenticated']);
    exit;
}

$email = $_SESSION['email'];

// Retrieve user data based on email from MySQL
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();

    // Get the user's email
    $userEmail = $row['email'];




    // MongoDB Connection
    $database = new MongoDB\Client('mongodb://localhost:27019');
    $myDatabase = $database->profile;
    $userCollection = $myDatabase->users;

    // Find user data based on the email from MySQL in MongoDB
    $user = $userCollection->findOne(['email' => $Email]);

    if ($user) {
        // Return user data as JSON
        header('Content-Type: application/json');
        echo json_encode(['message' => 'successfull', 'data' => $user]);
    } else {
        // Return failure message if user data isn't found in MongoDB
        echo json_encode(['message' => 'No user found in MongoDB']);
    }
} else {
    // Return failure message if user email isn't found in MySQL
    echo json_encode(['message' => 'No user found in MySQL']);
}

$conn->close();
?>