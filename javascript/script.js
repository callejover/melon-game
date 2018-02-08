
// For leaderboard drop down
  $('.show-info').click( function() {
	$(this).find('.more-info').slideToggle('slow');
});




//Skapa konto

document.getElementById('create-button').addEventListener('click', function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', "http://localhost:8012/api/register", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      window.location = 'html/menu.html';
    }
  }


  xmlhttp.send(JSON.stringify({
    name:document.getElementById('firstname').value,
    email:document.getElementById('email').value,
    password:document.getElementById('password').value
  }));

});

//Logga in

document.getElementById('login-button').addEventListener('click', function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('POST', "http://localhost:8012/api/authenticate", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        window.location = 'html/menu.html';
      }
    }


    xmlhttp.send(JSON.stringify({
      email:document.getElementById('login-email').value,
      password:document.getElementById('login-password').value
    }));

});