function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validate() {
    var returnValue;
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var contact = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    returnValue = true;


    if (firstname == "") {
        printError("firstNameError", "First name cannot be empty");
        setTimeout("document.getElementById('firstNameError').innerHTML=''", 2000);
        returnValue = false;
    }

    if (lastname == "") {
        printError("lastNameError", "Last name cannot be empty");
        setTimeout("document.getElementById('lastNameError').innerHTML=''", 2000);
        returnValue = false;
    }

    if (contact == "") {
        printError("contactNumberError", "Contact number cannot be empty");
        setTimeout("document.getElementById('contactNumberError').innerHTML=''", 2000);
        returnValue = false;
    }
    else if (isNaN(contact)) {
        printError("contactNumberError", "Please enter valid phone number");
        setTimeout("document.getElementById('contactNumberError').innerHTML=''", 2000);
        returnValue = false;
    }

    else if (contact.length < 10) {
        printError("contactNumberError", "Please enter 10 digit mobile number");
        setTimeout("document.getElementById('contactNumberError').innerHTML=''", 2000);
        returnValue = false;
    }

    if (address == "") {
        printError("addressError", "Address cannot be empty");
        setTimeout("document.getElementById('addressError').innerHTML=''", 2000);
        returnValue = false;
    }
    if (email == "") {
        return false;
    }
    else if (email.indexOf('@') <= 0) {
        printError("emailIdError", "Please enter valid Email");
        setTimeout("document.getElementById('emailIdError').innerHTML=''", 2000);
        returnValue = false;
    }
    else if ((email.charAt(email.length - 3) != '.') && (email.charAt(email.length - 4) != '.')) {
        printError("emailIdError", "Please enter valid Email");
        setTimeout("document.getElementById('emailIdError').innerHTML=''", 2000);
        returnValue = false;
    }

    return returnValue;


} 