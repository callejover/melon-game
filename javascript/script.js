
// For leaderboard drop down
  $('.show-info').click( function() {
	$(this).find('.more-info').slideToggle('slow');
});




//Skapa konto

var createButto = document.getElementById('create-button');
if (createButto){
  createButto.addEventListener('click', function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', "http://localhost:8012/api/register", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var j = JSON.parse(xmlhttp.responseText);
      if (j.status){
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