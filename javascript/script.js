// ======================================================================================================
// For starting the countdown on game page
// ======================================================================================================

$(document).ready(function(){
  $("#game-modal").modal('show');
});

// Note:
// Om spelaren börjar inom 20 m från en fråga kommer "Vill du spela?"-modalen att visas, men försvinna vid spelstart.


// ======================================================================================================
// For leaderboard drop down
// ======================================================================================================

$('.show-info').click( function() {
  $(this).find('.more-info').slideToggle('slow');
});


// ======================================================================================================
// Global funtion för att sätta cookies för användaren
// ======================================================================================================

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
  console.log(email +"="+ value +
      ";domain="+ window.location.hostname +
      ";path=/"+
      ";expires="+expireDate.toUTCString())
  document.cookie = email +"="+ value +
      ";domain="+ window.location.hostname +
      ";path=/"+
      ";expires="+expireDate.toUTCString();
}

function deleteCookie(name) {
  setCookie(name, "", null , null , null, 1);
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}



// ======================================================================================================
//Skapa konto
// ======================================================================================================

var createButto = document.getElementById('create-button');
if (createButto){
  createButto.addEventListener('click', function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', "http://localhost:8012/api/register", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //alert(xmlhttp.responseText);
      var j = JSON.parse(xmlhttp.responseText);  // parse bygger om responseText till ett objekt.
      if (j.status){    // Kontrollerar om det finns en status i objektet. 
        var emailCookie = document.getElementById('email').value;
        setCookie("email", emailCookie, null, null, 60); // Skapar en nu cookie med användaren email i en timme.
        //alert('Användare skapad');
        window.location = 'html/menu.html';
    } else {
      alert('Something went wrong');
      } 
  }
}

  xmlhttp.send(JSON.stringify({  // JSON.stringify kommer dela upp allt på rad 76-78 i strings.
    name:document.getElementById('firstname').value,
    email:document.getElementById('email').value,
    password:document.getElementById('password').value
  }));
});
}


// ======================================================================================================
//Logga in
// ======================================================================================================

var loginButton = document.getElementById('login-button');

if (loginButton) {
loginButton.addEventListener('click', function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', "http://localhost:8012/api/authenticate", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    xmlhttp.onreadystatechange = function() {
        //alert(xmlhttp.responseText)
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var p = JSON.parse(xmlhttp.response);
        var savedPoints = p.data[0].points;
        console.log(savedPoints);
        //console.log(p.data[0].name);

        var j = JSON.parse(xmlhttp.responseText);
        if (j.status) {
          var emailCookie = document.getElementById('login-email').value;
          console.log(emailCookie)
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

// ======================================================================================================
// Logga ut
// ======================================================================================================

var logoutButton = document.getElementById('logout');

if (logoutButton){
logoutButton.addEventListener('click', function() {
  deleteCookie("email");    // Tar bort cookien med namnet "email". Den som skapas när vi loggar in.
  window.location = '../index.html';
});
}
// SIMPLE GOBACK FUNCTION -redirects you to last page
function goBack() {
  window.history.back();
}

//Uppdatera db med poäng
function updatePointsAPI(email, points){
  var xmlhttp = new XMLHttpRequest()
  
  xmlhttp.open("POST", "http://localhost:8012/api/points", true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");

xmlhttp.send(JSON.stringify({
        email:email,
        points:points
    }));
    console.log('KÖRT!');
//Ev lägga till "om poäng failar"
  xmlhttp.onreadystatechange = function() {
     // console.log(xmlhttp);
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //  alert(xmlhttp.responseText);
    }
}

   
}

// ====================================================================================
// Hämta frågor

var questions = [];

function getQuestions() {

  var http = new XMLHttpRequest();

  http.open('POST', "http://localhost:8012/api/question", false);
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  http.onreadystatechange = function() {

    if(http.readyState == 4 && http.status == 200) {
      var m = JSON.parse(http.response);
 //     console.log(m);
      m.data.forEach(function(q){
        questions.push(q);
      });
     
    }
  }
  
  http.send();
  
}

// ====================================================================================
// Hämta användaren från databasen utifrån e-post med en callback funktion för att få ut användaren.
// Exempel:
// getUser(email, function (user) {
//  $('#points').text(user.points);
// });


function getUser(email, callback) {

  var http = new XMLHttpRequest();

  http.open('GET', "http://localhost:8012/api/user?email="+email, true);
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  http.onreadystatechange = function() {

    if(http.readyState == 4 && http.status == 200) {
      var m = JSON.parse(http.response);
      m.data.points = parseInt(m.data.points, 10)
      callback(m.data);     
    }
  }
  
  http.send();
  
}