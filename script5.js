// Button

let text = document.getElementById("buttonText");
    function clickLeft(){
            text.innerHTML = "I'm the right button!"
    }

    function clickRight(){
        text.innerHTML = "No, you're lying! I'm the right button!"
    }


// Hover

function onHover(msg) {
    alert("You're a bad listener...");
}


// Submitting email, username, and password

function final() {
    let user = doc.forms["partThree"]["username"].value;
    let email = doc.forms['partThree']["email"].value;
    let pass = doc.forms["partThree"]["password"].value;

    if (user.length < 1) {
        doc.getElementById('error-username').innerHTML = "!"
    }

    if (pass.length < 1) {
        doc.getElementById('error-password').innerHTML = "!";
    }

    if (email.length < 3 ) {
        doc.getElementById('error-email').innerHTML = "!";
    }

    if (pass != "12345678") {
        alert("Try another password. Check your notes again.");
        return false;
    }

    if (user.length < 1 || pass.length < 1) {
        return false;
    }

    else {
        alert("Good Job! You know your information.");
    }
}
