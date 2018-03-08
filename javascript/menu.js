// ======================================================================================================
// Check if the user is logged in using cookies
// ======================================================================================================

var user = getCookie("user")

window.onload = function(){
    if(document.cookie.length != 0) {
        var cookieArray = document.cookie.split("=");
        if(cookieArray[1] != 0) {
            $('#display-user').text(user)
        };
    } else {
        window.location = '../index.html';
    }
    
};

navigator.geolocation.getCurrentPosition(function(position) {
    var player = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }; 
});