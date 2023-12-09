
$(document).ready(function() {
	$('#submit').submit(function(e) {
		e.preventDefault();
        var Name =$('#username').val();
		var email=$('#email').val();
        var number=$('#Phone_number').val();
        var date=$('#date').val();
		var Password = $('#password').val();
		
        console.log("Received")
		$.ajax({
			url: "http://localhost:3000/php/register.php",
			type: "POST",
			data: {
				username: Name,
				password: Password,
                number:number,
                date:date,
                useremail:email
			},
			success:  function(response) {
                var result=JSON.parse(response);
				console.log(result)
                if(result.status)
                {
				$('#result').html("Registration successful");
                console.log(JSON.parse(response).status);
                 window.localStorage.setItem('email',email)
                window.location.replace("profile.html")
                }
                else{
                    $('#result').html(result.msg)
                }
			},
			error: function()
			{
				console.log("Error")
			},

		});
    

	});
});

function validateAndSubmit() {
    // Reset previous validation messages
    $(".required-validator").hide();

    // Check required fields
    var isValid = true;

    if ($("#name").val().trim() === "") {
        $("#name").next(".required-validator").show();
        isValid = false;
    }

    if ($("#email").val().trim() === "") {
        $("#email").next(".required-validator").show();
        isValid = false;
    }
    if ($("#password").val().trim() === "") {
        $("#password").next(".required-validator").show();
        isValid = false;
    }

    if ($("#confirm_password").val().trim() === "") {
        $("#confirm_password").next(".required-validator").show();
        isValid = false;
    }

    if ($("#Phone_number").val().trim() === "") {
        $("#Phone_number").next(".required-validator").show();
        isValid = false;
    }


    if ($("#date").val().trim() === "") {
        $("#date").next(".required-validator").show();
        isValid = false;
    }

    // If all required fields are filled, proceed with saving
    if (isValid) {
        // Your save logic here
        alert("Details saved successfully!");
    }
}

function validateAndSubmit() {
    // Get values from the form
    var newPassword = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var resultElement = document.getElementById("result");

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        // Display error message
        resultElement.innerHTML = "Please confirm the password correctly.";
        resultElement.className = ""; // Remove success class
        return false; // Prevent form submission
    }

    // Your existing form submission logic goes here

    // If everything is valid, submit the form
    resultElement.innerHTML = "Passwords match!";
    resultElement.className = "success"; // Apply success class
    return true;
}

function validatePasswords() {
    // Clear the error message if passwords match
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = ""; // Remove success class
}

$(document).ready(function () {
    $('#submit').submit(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var number = $('#Phone_number').val();
        var date = $('#date').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm_password').val();

        // Basic validation
        if (name === "" || email === "" || number === "" || date === "" || password === "" || confirmPassword === "") {
            $('#result').html("All fields are required");
            return;
        }

        // Additional validation, e.g., checking if passwords match
        if (password !== confirmPassword) {
            $('#result').html("Passwords do not match");
            return;
        }
        $.ajax({
            url: "http://localhost:3000/php/register.php",
            type: "POST",
            data: {
                username: name,
                password: password,
                number: number,
                date: date,
                useremail: email
            },
            success: function (response) {
                var result = JSON.parse(response);
                console.log(result);
                if (result.status) {
                    $('#result').html("Registration successful");
                    window.localStorage.setItem('email', email);
                    window.location.replace("profile.html");
                } else {
                    $('#result').html(result.msg);
                }
            },
            error: function () {
                console.log("Error");
            }
        });
    });
});