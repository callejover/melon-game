

// Accouts with acess to the page

var accounts = [{
    username: "calle",
    password: "calle",
    email: "aaa@aa.se"
}]





// Function for logging in to you account.

function login() {

const loginForm = document.forms['login-form'];
    
const usernameLogin = loginForm.querySelector('#username-login').value;
const passwordLogin = loginForm.querySelector('#password-login').value;

// Loops accouts and checks for matches
    for (i = 0; i < accounts.length; i++) {
        if (usernameLogin == accounts[i].username && passwordLogin == accounts[i].password) {
            window.location.replace('menu.html');
            alert('Välkommen ' + accounts[i].username);
            break;
        } else {
            alert('Du har har slagit in fel lösenord!');    
        }
    }
    return false;
};




// Function to create an account

function createAccount(){

    const createUsername = document.querySelector('#create-username').value;
    // const createEmail = createForm.querySelector('#create-email').value;
    // const createPassword = createForm.querySelector('#create-password').value;

    console.log(createUsername);
};