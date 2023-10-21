// TODO: Check length of input 
function checkLength(value, idErr, min, max) {
    var length = value.length; 

    if (min <= length && length <= max) {
        // valid
        document.getElementById(idErr).style.display = "none";
        return true;
    } else {
        document.getElementById(idErr).style.display = "block";
        document.getElementById(idErr).innerText = `Length must have ${min} to ${max} characters!`;
        return false; 
    }
}

// TODO: Check if input is all number
function checkNumber(value, idErr) {
    if (isNaN(value)) { 
        document.getElementById(idErr).style.display = "block"; 
        document.getElementById(idErr).innerText = "It must be number!";
        return true;
    } else {
        document.getElementById(idErr).style.display = "none";
        return false; 
    }
}

// TODO: check if input contains only letters 
function checkAllLetter(value, idErr) {
    const regex = /^[A-Z a-z]+$/; 
    if (regex.test(value)) {
        document.getElementById(idErr).style.display = "none";
        return true;
    }

    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerText = "It must be letters!";
    return false; 
}

// TODO: Check if input is empty
function checkEmpty(value, idErr) {
    if (value == null || value == "") {
        document.getElementById(idErr).style.display = "block"; 
        document.getElementById(idErr).innerText = "It must be filled!";
        return false;
    } 

    document.getElementById(idErr).style.display = "none";
    return true;
}

// TODO: (only for account input) Check if input is all number & has 4-6 digits
function checkAccountInput(value, idErr, min, max) {
    // Check if input is all number 
    if (isNaN(value)) {
        document.getElementById(idErr).style.display = "block"; 
        document.getElementById(idErr).innerText = "It must be number!";
        return true; 
    } else {
        // Check length of account input 
        var length = checkLength(value, idErr, min, max); 
        if (length) {
            document.getElementById(idErr).style.display = "none";
            return true;
        } else {
            document.getElementById(idErr).style.display = "block";
            document.getElementById(idErr).innerText = `Length must have ${min} to ${max} characters!`;
            return false;
        }
    }
} 