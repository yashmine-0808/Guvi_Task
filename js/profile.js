function calculateAge(selectedDate) {
    var selectedDateObj = new Date(selectedDate);
    var today = new Date();

    var age = today.getFullYear() - selectedDateObj.getFullYear();
    var monthDiff = today.getMonth() - selectedDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDateObj.getDate())) {
        age--;
    }

    document.getElementById("txtAge").value = age;
}

function validateAndSave() {
    // Reset previous validation messages
    $(".required-validator").hide();

    // Check required fields
    var isValid = true;

    if ($("#txtEmployeeName").val().trim() === "") {
        $("#txtEmployeeName").next(".required-validator").show();
        isValid = false;
    }

    if ($("#TextBox6").val().trim() === "") {
        $("#TextBox6").next(".required-validator").show();
        isValid = false;
    }

    if ($("#TextBox1").val().trim() === "") {
        $("#TextBox1").next(".required-validator").show();
        isValid = false;
    }

    if ($("#txtDOB").val().trim() === "") {
        $("#txtDOB").next(".required-validator").show();
        isValid = false;
    }

    if ($("#ddlGender").val().trim() === "") {
        $("#ddlGender").next(".required-validator").show();
        isValid = false;
    }


    if ($("#ddlBloodgroup").val().trim() === "") {
        $("#ddlBloodgroup").next(".required-validator").show();
        isValid = false;
    }

    if ($("#txtCity").val().trim() === "") {
        $("#txtCity").next(".required-validator").show();
        isValid = false;
    }

    // If all required fields are filled, proceed with saving
    if (isValid) {
        // Your save logic here
        alert("Details saved successfully!");
    }
}

function logout() {
    // Redirect to index.html
    window.location.href = "index.html";
}