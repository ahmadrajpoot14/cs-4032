// Function to validate SignUp form
function validateSignUp() {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('signupEmail').value;
    var birthdate = document.getElementById('signupBirthdate').value;
    var gender = document.getElementById('signupGender').value;
    var phoneNumber = document.getElementById('signupPhoneNumber').value;
    var zipCode = document.getElementById('signupZipCode').value;
    var country = document.getElementById('signupCountry').value;

    // Regular expressions for special characters and numeric characters
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var numericCharRegex = /\d/;

    if (username.trim() === '') {
        alert('Username cannot be empty');
        return false;
    }
    if (password.trim() === '') {
        alert('Password cannot be empty');
        return false;
    }
    if (confirmPassword.trim() === '') {
        alert('Please confirm your password');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    if (!specialCharRegex.test(password)) {
        alert('Password must contain at least one special character');
        return false;
    }
    if (!numericCharRegex.test(password)) {
        alert('Password must contain at least one numeric character');
        return false;
    }
    if (!isValidEmail(email)) {
        alert('Invalid email format');
        return false;
    }
    if (birthdate.trim() === '') {
        alert('Birthdate cannot be empty');
        return false;
    }
    if (gender.trim() === '') {
        alert('Please select your gender');
        return false;
    }
    if (phoneNumber.trim() === '') {
        alert('Phone Number cannot be empty');
        return false;
    }
    if (zipCode.trim() === '') {
        alert('Zip Code cannot be empty');
        return false;
    }
    if (country.trim() === '') {
        alert('Country cannot be empty');
        return false;
    }
    alert('Sign Up Successful');
    return true;
}

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
