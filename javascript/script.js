const api_url = "https://immense-sierra-44559.herokuapp.com/api";
const correct_score = 3;

// ======================================================================================================
// For starting the countdown on game page
// ======================================================================================================

$(document).ready(function(){
  $("#game-modal").modal('show');
});


// ======================================================================================================
// For leaderboard drop down
// ======================================================================================================

$('.show-info').click( function() {
  $(this).find('.more-info').slideToggle('slow');
});


// ======================================================================================================
// Global funtion to set user cookie
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
//  Create account
// ======================================================================================================

var createButto = document.getElementById('create-button');
if (createButto){
  createButto.addEventListener('click', function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', api_url + "/register", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var j = JSON.parse(xmlhttp.responseText);
      if (j.status){
        var emailCookie = document.getElementById('email').value;
        setCookie("email", emailCookie, null, null, 60);
        window.location = 'html/menu.html';
    } else {
      alert('Something went wrong');
      } 
  }
}

  xmlhttp.send(JSON.stringify({
    name:document.getElementById('firstname').value,
    email:document.getElementById('email').value,
    password:document.getElementById('password').value
  }));
});
}


// ======================================================================================================
// Log in
// ======================================================================================================

var loginButton = document.getElementById('login-button');

if (loginButton) {
  loginButton.addEventListener('click', function() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('POST', api_url + "/authenticate", true);
      xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
  
      xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var p = JSON.parse(xmlhttp.response);
          var savedPoints = p.data[0].points;
          var saveUser = p.data[0].name;
  
          var j = JSON.parse(xmlhttp.responseText);
          if (j.status) {
            var emailCookie = document.getElementById('login-email').value;
            setCookie("email", emailCookie, null, null, 60);
            setCookie("user", saveUser, null, null, 60);
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
// Log out
// ======================================================================================================

var logoutButton = document.getElementById('logout');

if (logoutButton){
logoutButton.addEventListener('click', function() {
  deleteCookie("email"); 
  window.location = '../index.html';
});
}


// ======================================================================================================
// Simple go back function to redirect to previous page
// ======================================================================================================

function goBack() {
  window.history.back();
}


// ======================================================================================================
// Update points in the database
// ======================================================================================================

function updatePointsAPI(email, points){
  var xmlhttp = new XMLHttpRequest()
  
  xmlhttp.open("POST", api_url + "/points", true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xmlhttp.send(JSON.stringify({
        email:email,
        points:points
    }));

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      alert(xmlhttp.responseText);
    }
  }     
}


// ======================================================================================================
// Get questions
// ======================================================================================================

var questions = [];

function getQuestions() {

  var http = new XMLHttpRequest();

  http.open('POST', api_url + "/question", false);
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  http.onreadystatechange = function() {

    if(http.readyState == 4 && http.status == 200) {
      var m = JSON.parse(http.response);
      m.data.forEach(function(q){
        questions.push(q);
      }); 
    }
  }
  
  http.send();
  
}


// ======================================================================================================
// Get user from database 
// ======================================================================================================

function getUser(email, callback) {

  var http = new XMLHttpRequest();

  http.open('GET', api_url + "/user?email=" + email, true);
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