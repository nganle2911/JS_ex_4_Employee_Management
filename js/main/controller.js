// TODO: Render employeeList 
function renderEmployeeList(emList) {
    var contentHTML = ""; 

    for (var i = 0; i < emList.length; i++) {
        var item = emList[i]; 

        // Add content for <tr> 
        contentHTML += `
            <tr>
                <td>${item.account}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.date}</td>
                <td>${item.title}</td>
                <td>${item.sumSalary}</td>
                <td>${item.rating}</td>
                <td>
                    <button class="btn btn-primary mb-2" data-toggle="modal" data-target="#myModal"  onclick="editEmployee('${item.account}')">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-danger" onclick="deleteEmployee('${item.account}')">
                        <i class="fa fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
    }

    // Render items on UI
    document.getElementById("tableDanhSach").innerHTML = contentHTML; 
}