function formValidation() {
    var passid = document.registration.psw;
    var firstname = document.registration.firstname;
    var lastname = document.registration.lastname;
    var phone = document.registration.phone;
    var uadd = document.registration.address;
    var uemail = document.registration.email;
    var male = document.registration.male;
    var female = document.registration.female;
    var other = document.registration.other;
    if (allLetter(firstname, lastname)) {
        if (passid_validation(passid, 7, 12)) {
            if (ValidateEmail(uemail)) {
                if (allnumeric(phone)) {
                    if (validsex(male, female, other)) {
                        if (alphanumeric(uadd)) {
                        }
                    }
                }
            }
        }
    }
    return false;
}


function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}
function allLetter(firstname, lastname) {
    var letters = /^[A-Za-z]+$/;
    if (firstname.value.match(letters) && lastname.value.match(letters)) {
        return true;
    }
    else {
        alert('Please Enter firstname and Lastname');
        uname.focus();
        return false;
    }
}
function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function allnumeric(phone) {
    var numbers = /^[0-9]+$/;
    if (phone.value.match(numbers)) {
        return true;
    }
    else {
        alert('Invalid phone number');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
} function validsex(male,female,other) {
    x = 0;

    if (male.checked) {
        x++;
    } if (female.checked) {
        x++;
    }
    if (other.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}
