function validateRegistrationForm() {
    let errors = [];
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;
    const terms = document.getElementById('terms').checked;

    // Validate Name
    if (name.trim() === "") {
        errors.push("Name is required.");
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email.");
    }

    // Validate Password
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Validate Age
    if (isNaN(age) || age < 18 || age > 100) {
        errors.push("Please enter a valid age between 18 and 100.");
    }

    // Validate Terms and Conditions checkbox
    if (!terms) {
        errors.push("You must agree to the terms and conditions.");
    }

    // Show Errors
    const errorDiv = document.getElementById('registrationErrors');
    errorDiv.innerHTML = errors.join("<br>");
    
    // Prevent form submission if there are errors
    return errors.length === 0;
}

function validateLoginForm() {
    let errors = [];
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email.");
    }

    // Validate Password
    if (password.trim() === "") {
        errors.push("Password is required.");
    }

    // Show Errors
    const errorDiv = document.getElementById('loginErrors');
    errorDiv.innerHTML = errors.join("<br>");
    
    // Prevent form submission if there are errors
    return errors.length === 0;
}
