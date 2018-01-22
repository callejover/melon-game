function initMap() {

  var gameMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 18
  }); 

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {

      var player = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      new google.maps.Marker({
        position: player,
        map: gameMap
      });

      gameMap.setCenter(player);
      
      console.log('Spelarens position uppdaterad. Ny position är:');
      console.log(player);

    });
  }
  
} 
