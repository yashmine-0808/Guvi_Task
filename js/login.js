function submitLoginForm() {
    // Handle login form submission using jQuery AJAX
    $.ajax({
      type: 'POST',
      url: 'login.php', // Replace with the actual path to your login.php file
      data: $('#loginForm').serialize(),
      success: function (response) {
        // Handle the response from the server
        console.log(response);
        // You can implement redirection logic based on the server response
        // For example, if the response is successful, redirect to the profile page
        if (response.status === 'success') {
          window.location.href = 'profile.html';
        }
      },
      error: function (error) {
        // Handle errors (e.g., display an error message)
        console.error(error);
      }
    });
  }