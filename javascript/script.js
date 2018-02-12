
// For leaderboard drop down
  $('.show-info').click( function() {
	$(this).find('.more-info').slideToggle('slow');
});


// Global funtion för att sätta cookies för användaren

function setCookie(email, value, expireDays, expireHours, expireMinutes, expireSeconds) {
  var expireDate = new Date();
  if (expireDays) {
      expireDate.setDate(expireDate.getDate() + expireDays);
  }
  if (expireHours) {
      expireDate.setHours(expireDate.getHours() + expireHours);
  }
  if (expireMinutes) {
      expireDate.setMinutes(expireDate.getMinutes() + expireMinutes);
  }
  if (expireSeconds) {
      expireDate.setSeconds(expireDate.getSeconds() + expireSeconds);
  }
  document.cookie = email +"="+ value +
      ";domain="+ window.location.hostname +
      ";path=/"+
      ";expires="+expireDate.toUTCString();
}

function deleteCookie(name) {
  setCookie(name, "", null , null , null, 1);
}

//Skapa konto

var createButto = document.getElementById('create-button');
if (createButto){
  createButto.addEventListener('click', function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', "http://localhost:8012/api/register", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      alert(xmlhttp.responseText);
      var j = JSON.parse(xmlhttp.responseText);  // parse bygger om responseText till ett objekt.
      if (j.status){    // Kontrollerar om det finns en status i objektet. 
      window.location = 'html/menu.html';
    } else {
      alert('Something went wrong');
      } 
  }
}

  xmlhttp.send(JSON.stringify({  // JSON.stringify kommer dela upp allt på rad 57-59 i strings.
    name:document.getElementById('firstname').value,
    email:document.getElementById('email').value,
    password:document.getElementById('password').value
  }));
});
}

//Logga in

var loginButton = document.getElementById('login-button');

if (loginButton) {
loginButton.addEventListener('click', function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', "http://localhost:8012/api/authenticate", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var j = JSON.parse(xmlhttp.responseText);
        if (j.status) {
          var emailCookie = document.getElementById('login-email').value;
          setCookie("email", emailCookie, null, null, 60); // Skapar en nu cookie med användaren email i en timme.
          window.location = 'html/menu.html';
        } else {
          alert('Login failed');
        }
      }
    }


    xmlhttp.send(JSON.stringify({
      email:document.getElementById('login-email').value,
      password:document.getElementById('login-password').value
    }));

});
}


// Logga ut

var logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', function() {
  deleteCookie("email");    // Tar bort cookien med namnet "email". Den som skapas när vi loggar in.
  window.location = '../index.html';
});