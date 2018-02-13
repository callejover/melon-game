var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var playerMarker = null;
var locations = [
  ['Fråga 4', 59.313780, 18.110307, "Hur många olika språk kan Kristian prata?", "1", "3", "5", "75", 3],
  ['Fråga 5', 59.313025, 18.110050, 5],
  ['Fråga 3', 59.312773, 18.110715, 3],
  ['Fråga 2', 59.313063, 18.107690, 2],
  ['Fråga 1', 59.314257, 18.110898, 1],
  ['Fråga 6', 59.314071, 18.110468, 6],
  ['Fråga 7', 59.314032, 18.109481, 7],
  ['Fråga 8', 59.313884, 18.108763, 8],
  ['Fråga 9', 59.313934, 18.108022, 9],
  ['Fråga 10', 59.312592, 18.111702, 10],
  ['Fråga 11', 59.312724, 18.113000, 11],
  ['Fråga 12', 59.312275, 18.111101, 12],
  ['Fråga 13', 59.312247, 18.110200, 13],
  ['Fråga 14', 59.311858, 18.109556, 14],
  ['Fråga 15', 59.312899, 18.114363, 15],
  ['Fråga 16', 59.312450, 18.107786, 16],
  ['Fråga 17', 59.314520, 18.111724, 17],
  ['Fråga 18', 59.313529, 18.111176, 18],
  ['Fråga 19', 59.314574, 18.112046, 19],
  ['Fråga 20', 59.313928, 18.112013, 20]
];

var gameMap = null;


function runGame(pos) {
    //gameMap.setCenter(player);
    playerMarker.setPosition(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    console.log('Spelarens position uppdaterad. Ny position är:');
    console.log(pos.coords);
    for (i = 0; i < locations.length; i++) { 
      //console.log(locations[i][1] + " "+ pos.coords.latitude);
      var dist = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude), new google.maps.LatLng(locations[i][1], locations[i][2]));
      if (dist <= 50) {
        console.log("Distance:" + dist + " " + locations[i][0]);
      }
    }
}

// function initMap() {
//   gameMap = new google.maps.Map(document.getElementById('map'), {
//     zoom: 18,
//     disableDefaultUI: true
//   }); 

  function initMap() {
    gameMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      disableDefaultUI: true,
      styles: [
              {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
              }
            ]
    }); 
  
    navigator.geolocation.getCurrentPosition(function(position) {
      var player = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      gameMap.setCenter(player);
      var image = '../pictures/question.png';
      playerMarker = new google.maps.Marker({
        position: player,
        map: gameMap,
        icon: image
      });

  // navigator.geolocation.getCurrentPosition(function(position) {
  //   var player = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   };
  //   gameMap.setCenter(player);

  //   playerMarker = new google.maps.Marker({
  //     position: player,
  //     map: gameMap,
  //     icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  //   });
    for (i = 0; i < locations.length; i++) {  
      //console.log(locations[i]);
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: gameMap
      })
      }
  
  });


  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(runGame)
  }
  
}; 
