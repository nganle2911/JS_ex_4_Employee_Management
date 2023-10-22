// TODO: Check if input is empty
function checkEmpty(value, idErr) {
    if (value == null || value == "") {
        document.getElementById(idErr).style.display = "block";
        document.getElementById(idErr).innerText = "It must be filled!";
        return false;
    }
    document.getElementById(idErr).style.display = "none";
    return true;
}; 

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
};

// TODO: Check if input is all number
function checkNumber(value, idErr) {
    if (!isNaN(value)) {
        document.getElementById(idErr).style.display = "none";
        return true;
    } else {
        document.getElementById(idErr).style.display = "block";
        document.getElementById(idErr).innerText = "It must be number!";
        return false;
    }
};

// TODO: Check if input contains only letters 
function checkAllLetter(value, idErr) {
    const regex = /^[A-Z a-z]+$/;
    if (regex.test(value)) {
        document.getElementById(idErr).style.display = "none";
        return true;
    }
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerText = "It must be letters!";
    return false;
}; 

// TODO: Check if email input is valid
function checkEmail(value, idErr) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
        document.getElementById(idErr).style.display = "none";
        return true;
    }
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerText = "Invalid Email!";
    return false;
}; 

// TODO: Check valid password 
function checkPassword(value, idErr) {
    var regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/; 
    if (regexPass.test(value)) {
        document.getElementById(idErr).style.display = "none";
        return true;
    }
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerText = "Password must contain at least one number, one uppercase letter, one special letter and have 6-10 characters!";
    return false;
}

// TODO: Check if an input field is between [n1, n2]
function checkRange(value, idErr, name, n1, n2) {
    if (value >= n1 && value <= n2) {
        document.getElementById(idErr).style.display = "none";
        return true;
    }
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerText = `${name} must be between [${n1}, ${n2}]!`;
    return false; 
}

// TODO: Check if position is invalid 
function checkPosition(value, idErr) {
    if (value == "Giám đốc" || value == "Trưởng phòng" || value == "Nhân viên") {
        document.getElementById(idErr).style.display = "none";
        return true;
    }
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerText = "Please enter the correct position!";
    return false; 
}

// TODO: Check if account existed
function checkAccount(value, EmpList) {
    var position = EmpList.findIndex((item) => {
        return item.account === value;
    }); 
    if (position != -1) {
        document.getElementById("tbTKNV").style.display = "block";
        document.getElementById("tbTKNV").innerText = "Account already existed! Please enter another account!"; 
        return false;
    }
    document.getElementById("tbTKNV").style.display = "none";
    return true; 
}; 