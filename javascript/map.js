// ======================================================================================================
// Frågor
// ======================================================================================================


  // SPARA GAMLA FRÅGOR FÖR DERAS POSITIONER ÄR VIKTIGA.

  // ['Fråga 4', 59.313780, 18.110307, "Hur många olika språk kan Kristian prata?", "1", "3", "5", "75", 3],
  // ['Fråga 5', 59.313025, 18.110050, 5],
  // ['Fråga 3', 59.312773, 18.110715, 3],
  // ['Fråga 2', 59.313063, 18.107690, 2],
  // ['Fråga 1', 59.314257, 18.110898, 1],
  // ['Fråga 6', 59.314071, 18.110468, 6],
  // ['Fråga 7', 59.314032, 18.109481, 7],
  // ['Fråga 8', 59.313884, 18.108763, 8],
  // ['Fråga 9', 59.313934, 18.108022, 9],
  // ['Fråga 10', 59.312592, 18.111702, 10],
  // ['Fråga 11', 59.312724, 18.113000, 11],
  // ['Fråga 12', 59.312275, 18.111101, 12],
  // ['Fråga 13', 59.312247, 18.110200, 13],
  // ['Fråga 14', 59.311858, 18.109556, 14],
  // ['Fråga 15', 59.312899, 18.114363, 15],
  // ['Fråga 16', 59.312450, 18.107786, 16],
  // ['Fråga 17', 59.314520, 18.111724, 17],
  // ['Fråga 18', 59.313529, 18.111176, 18],
  // ['Fråga 19', 59.314574, 18.112046, 19],
  // ['Fråga 20', 59.313928, 18.112013, "Är det här nästa fråga?", "1", "3", "5", "75", 3]
  var locations = [
    { 
    question: 'Vad är godast?',
    answers: [
      'pizza',
      'kebab',
      'tacos'
    ],
    correctAnswer: 'tacos',
    position: {
      lat: 59.313780,
      long: 18.110307
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vem är bäst?',
    answers: [
      'mamma',
      'pappa',
      'morfar'
    ],
    correctAnswer: 'morfar',
    position: {
      lat: 59.313025,
      long: 18.110050
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vem är sämst?',
    answers: [
      'knatte',
      'fnatte',
      'tjatte'
    ],
    correctAnswer: 'tjatte',
    position: {
      lat: 59.312773,
      long: 18.110715
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vinner Sverige OS??',
    answers: [
      'Ja!',
      'Neeeeeej!',
      'Lite kanske'
    ],
    correctAnswer: 'Ja!',
    position: {
      lat: 59.313529,
      long: 18.111176
    },
    visible: false,
    alreadyAnswered: false
  }
];

// ======================================================================================================
// Globala variabler
// ======================================================================================================

var gameMap = null;                           // Startvärde för gameMap är null.
var playerMarker = null;                      // Startvärde för spelarmarkören är null.
var points = 0;
var image = '../pictures/question.png';       // Sparad ikon.
var mapStyles = [                             // Speciella stil-inställningar för kartan.
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
    ];

// ======================================================================================================
// Globala funktioner
// ======================================================================================================

function initMap() {                                                // Startar kartan.
  gameMap = new google.maps.Map(document.getElementById('map'), {   // Skapar ny karta med namnet gameMap.
    zoom: 18,                                                       // Hur inzoomad är vi på kartan.
    disableDefaultUI: true,                                         // Tar bort zoom knappar osv på kartan.
    enableHighAccuracy: true,                                       // Mer träffsäker.
    styles: mapStyles                                               // Speciella kartinställningar för utseende.
  }); 
  
  navigator.geolocation.getCurrentPosition(function(position) {     // Skapar en spelare vid start.
    var player = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };                                                              
    gameMap.setCenter(player);                                      // Skapar en markör till spelaren.
    playerMarker = new google.maps.Marker({                         // Spelaren heter playerMarker.
      position: player,                                             // Position efter skapad spelare vid start.
      map: gameMap,                                                 // Kartan spelaren skapas på.
      icon: image                                                   // Spelaren ikon/marker.
    });

    
    locations.forEach(function(questionPosition) {                                                        // Loopar alla frågor och sätter en marker till varje.
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(questionPosition.position.lat, questionPosition.position.long),
        map: gameMap
      })
    })
      
  });

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(runGame)                      // Varje gång spelaren ändrar positon kör vi spelet.
  }
  
}; // Stänger initMap



function runGame(pos) {                                                                           // Kör spelet.
    playerMarker.setPosition(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));  // Sätter spelaren på den uppdaterade positionen.
      locations.forEach(function(f, index){                                                              // Loopar alla frågor. Varje frågeobjekt heter nu f.
        
        $('#points').text(points);

        var dist = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude), new google.maps.LatLng(f.position.lat, f.position.long));  // Avståndet mellan spelaren och varje frågas sparas här.
        

         if (dist <= 20 && f.visible == false && f.alreadyAnswered == false) {                                                  // Om spelaren är inom 20 meter och frågan inte visas.
          var questionVisible = f;
          
          questionVisible.visible = true;                                                         // Frågan ska visas.
          
            if (questionVisible.visible) {                                                        // Om frågan då visas.
              $("#question-modal").modal('show');                                                 // Visa frågemodalen.
              console.log(questionVisible);
              $('#start-questiion-button').on('click', function(event) {                          // Om man trycker på "Jag vill svara på frågan"-knappen.
              console.log(f.answers);
              $('#question').css('display', 'none');                                              // div med id question göms.
              $('#your-question').css('display', 'block');                                        // div med id your-question visas.
              $('#main-question').text(f.question);                                               // Visa aktuell fråga i h3 med id main-question. 
              $('#alternative-1').text(f.answers[0]);                                             // Visa aktuell fråga i button med id #alternative-1
              $('#alternative-2').text(f.answers[1]);                                             // Visa aktuell fråga i button med id #alternative-2
              $('#alternative-3').text(f.answers[2]);                                             // Visa aktuell fråga i button med id #alternative-3
              });

              $('#alternative-1').on('click', function(event) {
                //console.log(f);
                //console.log(f.correctAnswer);
                if (f.answers[0] == f.correctAnswer) {
                  points = points + 3;
                  $('#points').text(points);
                  $("#question-modal").modal('hide');
                } else {
                  questionVisible.alreadyAnswered = true;
                  alert('FEL SVAR! NOLL POÄNG!');
                  $("#question-modal").modal('hide');
                }
              });
      
              $('#alternative-2').on('click', function(event) {
                //console.log(f.answers[1]);
                //console.log(f.correctAnswer);
                if (f.answers[1] == f.correctAnswer) {
                  points = points + 3;
                  $('#points').text(points);
                  $("#question-modal").modal('hide');
              } else {
                questionVisible.alreadyAnswered = true;
                alert('FEL SVAR! NOLL POÄNG!');
                  $("#question-modal").modal('hide');
              }
              });
      
              $('#alternative-3').on('click', function(event) {
                //console.log(f.answers[2]);
                //console.log(f.correctAnswer);
                if (f.answers[2] == f.correctAnswer) {
                  points = points + 3;
                  $('#points').text(points);
                  $("#question-modal").modal('hide');
                } else {
                  alert('FEL SVAR! NOLL POÄNG!');
                  $("#question-modal").modal('hide');
                }
                questionVisible.alreadyAnswered = true;
                for(i = 0; i < locations.length; i++) {
                  locations.splice(index, locations.length);
                }
                console.log(locations);
              });
            }                                                                                 

        } else if (dist >= 20 && f.visible == true) {                                             // Om spelaren är utanför 20 m från en fråga men fortfarande har frågan aktiv.
          var questiionNotVisible = f;
          console.log('ej inom räckhåll och visible true');
          console.log(questiionNotVisible);
          $("#question-modal").modal('hide');                                                     // Göm frågemodalen.
          $('#your-question').css('display', 'none');                                             // Ändra att aktuell fråga inte syns.
          $('#question').css('display', 'block');                                                 // Visa istället "Jag vill svara på frågan" innehållet.

          f.visible = false;                                                                      // Sätter att frågan inte längre ska visa modal.

       } else {
         var questionNotClose = f;
         console.log('ej inom räckhåll');                                                         // Loggar bara att frågan är utom räckhåll och inte ska visas.
       }
       
       
      }); // Stänger forEach loopen.

};   // Stänger runGame funktionen.
