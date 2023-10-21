// TODO: Define Employee 
function Employee(_account, _name, _email, _password, _date, _salary, _title, _hour) {
    this.account = _account;
    this.name = _name;
    this.email = _email; 
    this.password = _password;
    this.date = _date;
    this.salary = _salary; 
    this.title = _title;
    this.hour = _hour; 
    this.sumSalary = calculateSalary(this.title, this.salary); 
    this.rating = rateEmployee(this.hour); 
}

// TODO: Calculate salary 
function calculateSalary(title, salary) {
    var amount; 
    if (title == "Giám đốc") {
        amount = salary * 3; 
    } else if (title == "Trưởng phòng") {
        amount = salary * 2; 
    } else {
        amount = salary; 
    }

    return amount; 
}; 

// TODO: Rate employee
function rateEmployee(hours) {
    var rating = ""; 
    if (hours < 160) {
        rating = "Trung Bình";
    } else if (hours >= 160 && hours < 176) {
        rating = "Khá"; 
    } else if (hours >= 176 && hours < 192) {
        rating = "Giỏi";
    } else {
        rating = "Xuất Sắc"; 
    }
    
    return rating; 
}