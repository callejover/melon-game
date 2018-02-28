// Kontrollerar om användaren är inloggad när sidan laddas.

var user = getCookie("user")
console.log(user)

window.onload = function(){
    if(document.cookie.length != 0) { // Om det finns fler än 0 cookies betyder det att någon har loggat in.
        var cookieArray = document.cookie.split("=");   // Splittar cookien så vi särar på name och value.
        if(cookieArray[1] != 0) {   // Om det finns ett value så är användaren välkommen.
            console.log('Välkommen ' + cookieArray[1]);
            $('#display-user').text(user)
        };
    } else {    // Annars skickas användaren tillbaka till startsidan.
        window.location = '../index.html';
    }
    
};

navigator.geolocation.getCurrentPosition(function(position) {     // Skapar en spelare vid start.
    var player = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }; 
});