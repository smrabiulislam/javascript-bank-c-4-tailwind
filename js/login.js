// step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {

    // step-2: get the email address inside the email input field
    //always remember to use .value to get text from an input field 

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step-3: get the password

    const passField = document.getElementById('user-pass');
    const password = passField.value;

    // danger don't verify email password on the client side

    // step-4: verify email and password

    if (email === 'sontan@baap.com' && password === 'secret') {

        // another page er link koranor jonno amra window.location.href use korbo
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user')
    }


})