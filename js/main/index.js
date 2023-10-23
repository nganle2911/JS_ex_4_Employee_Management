// Create an empty list
var employeeList = []; 

// Get data from localStorage
getLocalStorage(); 

// TODO: Add employee
function addEmployee() {
    // Get employee's info from form
    var _account = document.getElementById("tknv").value;
    var _name = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _password = document.getElementById("password").value;
    var _date = document.getElementById("datepicker").value;
    var _salary = document.getElementById("luongCB").value * 1;
    var _title = document.getElementById("chucvu").value;
    var _hour = document.getElementById("gioLam").value;

    // Create a new object 
    var employee = new Employee(_account, _name, _email, _password, _date, _salary, _title, _hour);

    // todo: Validation for each input fields before pushing 
    var isValid; 
    // account field
    isValid = checkEmpty(employee.account, "tbTKNV") && checkNumber(employee.account, "tbTKNV") && checkLength(employee.account, "tbTKNV", 4, 6) && checkAccount(employee.account, employeeList); 
    // name field
    isValid &= checkEmpty(employee.name, "tbTen") && checkAllLetter(employee.name, "tbTen");
    // email field 
    isValid &= checkEmpty(employee.email, "tbEmail") && checkEmail(employee.email, "tbEmail");
    // password field
    isValid &= checkEmpty(employee.password, "tbMatKhau") && checkPassword(employee.password, "tbMatKhau"); 
    // date field
    isValid &= checkEmpty(employee.date, "tbNgay"); 
    // salary field
    isValid &= checkEmpty(employee.salary, "tbLuongCB") && checkRange(employee.salary, "tbLuongCB", "Salary", 1000000, 20000000); 
    // position field
    isValid &= checkPosition(employee.title, "tbChucVu"); 
    // hour field
    isValid &= checkEmpty(employee.hour, "tbGiolam") && checkRange(employee.hour, "tbGiolam", "Hours", 80, 200); 
    
    if (isValid) {
        // Push this object to the employeeList 
        employeeList.push(employee);
        // console.log("employeeList", employeeList);

        document.getElementById("form-login").reset();

        // Save to localStorage
        saveLocalStorage();

        // Render employeeList on UI
        renderEmployeeList(employeeList);
    }
}

// TODO: Delete employee
function deleteEmployee(accountClicked) {
    // Find position need to delete
    var position = employeeList.findIndex((item) => {
        return item.account == accountClicked; 
    });

    // Using splice to remove item
    employeeList.splice(position, 1); 

    // Re-render employeeList
    renderEmployeeList(employeeList); 

    // Save to localStorage
    saveLocalStorage(); 
}

// TODO: Edit employee
function editEmployee(accountClicked) {
    // Find position need to edit
    var position = employeeList.findIndex((item) => {
        return item.account == accountClicked; 
    }); 

    var editedEmp = employeeList[position]; 

    // Put employee's info on form 
    document.getElementById("tknv").value = editedEmp.account; 
    document.getElementById("name").value = editedEmp.name;
    document.getElementById("email").value = editedEmp.email;
    document.getElementById("password").value = editedEmp.password;
    document.getElementById("datepicker").value = editedEmp.date;
    document.getElementById("luongCB").value = editedEmp.salary;
    document.getElementById("chucvu").value = editedEmp.title;
    document.getElementById("gioLam").value = editedEmp.hour;
    document.getElementById("tknv").disabled = true;
}

// TODO: Update employee
function updateEmployee() {
    // Retrieve the edited data from the form
    var updatedEmp = {
        account: document.getElementById("tknv").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        date: document.getElementById("datepicker").value,
        salary: document.getElementById("luongCB").value * 1,
        title: document.getElementById("chucvu").value,
        hour: document.getElementById("gioLam").value
    };

    // Find the position of updatedEmp in employeeList
    var position = employeeList.findIndex((item) => {
        return item.account == updatedEmp.account;
    });

    if (position != -1) { // found 
        // Update employee's info in employeeList
        employeeList[position] = updatedEmp;
        // console.log("employeeList[position] before validation", employeeList[position]);

        // todo: Validation for each input fields before pushing 
        var isValid = true;
        // name field
        isValid &= checkEmpty(employeeList[position].name, "tbTen") && checkAllLetter(employeeList[position].name, "tbTen");
        // email field 
        isValid &= checkEmpty(employeeList[position].email, "tbEmail") && checkEmail(employeeList[position].email, "tbEmail");
        // password field
        isValid &= checkEmpty(employeeList[position].password, "tbMatKhau") && checkPassword(employeeList[position].password, "tbMatKhau");
        // date field
        isValid &= checkEmpty(employeeList[position].date, "tbNgay");
        // salary field
        isValid &= checkEmpty(employeeList[position].salary, "tbLuongCB") && checkRange(employeeList[position].salary, "tbLuongCB", "Salary", 1000000, 20000000);
        // position field
        isValid &= checkPosition(employeeList[position].title, "tbChucVu");
        // hour field
        isValid &= checkEmpty(employeeList[position].hour, "tbGiolam") && checkRange(employeeList[position].hour, "tbGiolam", "Hours", 80, 200);

        if (isValid) {
            // Create employeeList[position] as a new object of Employee()
            employeeList[position] = new Employee(updatedEmp.account, updatedEmp.name, updatedEmp.email, updatedEmp.password, updatedEmp.date, updatedEmp.salary, updatedEmp.title, updatedEmp.hour);

            // Clear the form after updating
            document.getElementById("form-login").reset();
            document.getElementById("tknv").disabled = false;

            // Re-render employeeList
            renderEmployeeList(employeeList);

            // Save to localStorage
            saveLocalStorage();
        }
    }
}

// When pressing on button "Close" => form will be reset 
function resetForm() {
    document.getElementById("tknv").disabled = false;
    document.getElementById("form-login").reset();
}

// TODO: Save data in localStorage
function saveLocalStorage() {
    // Convert employeeList to json format
    var dataJson = JSON.stringify(employeeList); 

    // Save to localStorage
    localStorage.setItem("EMPLOYEE_LIST_LOCAL", dataJson); 
}

// TODO: Get data from localStorage
function getLocalStorage() {
    // Get json data saved from localStorage
    var dataJson = localStorage.getItem("EMPLOYEE_LIST_LOCAL", employeeList);

    /**
     * Check if dataJson is null or not 
     *  - if null => don't have any data => cannot parse 
     *  - if not null => data exists => parse data
     */
    if (dataJson != null) {
        // Convert dataJson to employeeList
        var dataArr = JSON.parse(dataJson);

        employeeList = dataArr.map((item) => {
            return new Employee(item.account, item.name, item.email, item.password, item.date, item.salary, item.title, item.hour);
        });

        // Render items on UI
        renderEmployeeList(employeeList);
    }
}