var selectedRow = null;

function addData() {
    if (validate()) {
        var formData = getValue();
        if (selectedRow == null)
            insertForm(formData);
        else
            updateData(formData);
        resetForm();
    }
}


function getValue() {
    var FormData = {};

    FormData["firstName"] = document.getElementById("firstName").value;
    FormData["lastName"] = document.getElementById("lastName").value;
    FormData["contact"] = document.getElementById("contactNumber").value;
    FormData["emailId"] = document.getElementById("email").value;
    FormData["address"] = document.getElementById("address").value;
    return FormData;

}


function insertForm(data) {
    var insertTable = document.getElementById("table").getElementsByTagName("tbody")[0];
    var newRow = insertTable.insertRow(insertTable.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.contact;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.emailId;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="editData(this);" id="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>
    <a onclick ="deleteUser(this);" id="delete"><i class="fa fa-trash" aria-hidden="true"></i></a>`;
}



function updateData(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.contact;
    selectedRow.cells[3].innerHTML = formData.emailId;
}

function editData(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("contactNumber").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}






function deleteUser(td) {
    confirm("Are you sure want to delete it.")
    var row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    resetForm();
};



function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("contactNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;

}


