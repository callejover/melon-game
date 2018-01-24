

// Accouts with acess to the page

var accounts = [{
    username: "calle",
    password: "calle",
    email: "aaa@aa.se"
}]

// Puts typed username and password into variables

function login() {
    var username = document.getElementById("username").value.toLowerCase();
    var password = document.getElementById("password").value.toLowerCase();

    //Loops accouts and checks for matches
    for (i = 0; i < accounts.length; i++) {
        if (username == accounts[i].username && password == accounts[i].password) {
            window.location.replace('menu.html');
            alert('Välkommen ' + accounts[i].username);
            break;
        } else {
            alert('Du har har slagit in fel lösenord!');
        }
    }
    return false;
};
