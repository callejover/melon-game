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
    question: 'Hur många stjärnor finns det på nya Zeelands flagga?',
    answers: [
      '4',
      '8',
      '12'
    ],
    correctAnswer: '4',
    position: {
      lat: 59.313780,
      long: 18.110307
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vilekn av följande länder är folkrikast?',
    answers: [
      'Frankrike',
      'Italien',
      'Iran'
    ],
    correctAnswer: 'Iran',
    position: {
      lat: 59.313025,
      long: 18.110050
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Ungefär hur mycket julskinka äts det per person till jul i Sverige varje år?',
    answers: [
      '300 gram',
      '1 kg',
      '580 gram'
    ],
    correctAnswer: '1 kg',
    position: {
      lat: 59.312773,
      long: 18.110715
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vilken europeisk klubb var den första för brasilianska Ronaldo?',
    answers: [
      'Barcelona',
      'Inter',
      'PSV Eindhoven'
    ],
    correctAnswer: 'Barcelona',
    position: {
      lat: 59.313063,
      long: 18.107690
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vem är avbildad på nya 200-kronorsedeln?',
    answers: [
      'Astrid Lindgren',
      'Evert Taube',
      'Ingmar Bergman'
    ],
    correctAnswer: 'Ingmar Bergman',
    position: {
      lat: 59.314257,
      long: 18.110898
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vad är en vanlig huvudingrediens i den vegetariska varianten av julskinka?',
    answers: [
      'Morot',
      'Polkabetor',
      'Rotselleri'
    ],
    correctAnswer: 'Rotselleri',
    position: {
      lat: 59.314071,
      long: 18.110468
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'I vilket land ligger Kilimanjaro?',
    answers: [
      'Kenya',
      'Tanzania',
      'Zambia'
    ],
    correctAnswer: 'Tanzania',
    position: {
      lat: 59.314032,
      long: 18.109481
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vilket trädslag är det i glasspinnen?',
    answers: [
      'Bok',
      'Al',
      'Asp'
    ],
    correctAnswer: 'Bok',
    position: {
      lat: 59.313884,
      long: 18.108763
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vilken är den globalt mest spelade artisten enligt Spotify? (fram till juni 2017)?',
    answers: [
      'Lady Gaga',
      'Drake',
      'Justin Bieber'
    ],
    correctAnswer: 'Drake',
    position: {
      lat: 59.313934,
      long: 18.108022
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'I vilket band är Lindsey Buckinham och Stevie Nicks medlemmar?',
    answers: [
      'Fugees',
      'Rolling Stones',
      'Fleetwood Mac'
    ],
    correctAnswer: 'Fleetwood Mac',
    position: {
      lat: 59.312592,
      long: 18.111702
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vilken färg har avslutande e:et i Google:s logga?',
    answers: [
      'Röd',
      'Gul',
      'Grön'
    ],
    correctAnswer: 'Röd',
    position: {
      lat: 59.312724,
      long: 18.113000
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'I vilken stad ligger kända Beatles-gatan Abbey Road?',
    answers: [
      'Manchester',
      'Liverpool',
      'London'
    ],
    correctAnswer: 'London',
    position: {
      lat: 59.312275,
      long: 18.111101
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vad heter Fantomens häst?',
    answers: [
      'Hero',
      'Lord',
      'Jolly Jumper'
    ],
    correctAnswer: 'Hero',
    position: {
      lat: 59.312247,
      long: 18.110200
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'På vilken ö ligger vulkanen Etna?',
    answers: [
      'Teneriffa',
      'Azorerna',
      'Sicilien'
    ],
    correctAnswer: 'Sicilien',
    position: {
      lat: 59.311858,
      long: 18.109556
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Den populära Ben & Jerry-glassen är ofta väldigt ”tuggvänlig”, vilket är ett genomtänkt koncept. Varför?',
    answers: [
      'En av grundarna saknar lukt- och smaksinne',
      'Företaget ville vinna marknadsandelar',
      'Den skulle smälta långsammare i sommarvärmen'
    ],
    correctAnswer: 'En av grundarna saknar lukt- och smaksinne',
    position: {
      lat: 59.312899,
      long: 18.114363
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'I vilket land är Bibimpap nationalrätt?',
    answers: [
      'Thailand',
      'Vietnam',
      'Nordkorea'
    ],
    correctAnswer: 'Nordkorea',
    position: {
      lat: 59.312450,
      long: 18.107786
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'I sommarvärmen expanderar metaller såsom järn. Med hur många centimeter ”växer” Eiffeltornet under sommaren?',
    answers: [
      '5 cm',
      '15 cm',
      '22 cm'
    ],
    correctAnswer: '15 cm',
    position: {
      lat: 59.314520,
      long: 18.111724
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'I 2016 års nyordslista dyker ordet "Ghosta" upp. Vad betyder det?',
    answers: [
      'Göra slut med någon genom att sluta ge ifrån sig livstecken',
      'Genomföra en kontaktlös kortbetalning',
      'Att ha ett anonymt konto i sociala medier, i synnerhet Twitter'
    ],
    correctAnswer: 'Göra slut med någon genom att sluta ge ifrån sig livstecken',
    position: {
      lat: 59.313529,
      long: 18.111176
    },
    visible: false,
    alreadyAnswered: false
  },
  { 
    question: 'Vilken medelhastighet har ett fordon som färdas 60km på 4 timmar?',
    answers: [
      '20km/h',
      '15km/h',
      '30km/h'
    ],
    correcAnswer: '15km/h',
    position: {
      lat: 59.314574,
      long: 18.112046
    },
    visible: false,
    alreadyAnswered: false
  },
  {
  question: 'Julmust, Påskmust och… Sommarmust. Vilket bryggeri har provat lansera Sommarmust utan succé?',
  answers: [
    'Kopparbergs',
    'Carlsberg',
    'Spendrups'
  ],
  correcAnswer: 'Carlsberg',
  position: {
    lat: 59.313928,
    long: 18.1120138
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
var markers = [];
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
  getQuestions()
  //console.log(questions);
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

    
    questions.forEach(function(questionPosition) {                                                        // Loopar alla frågor och sätter en marker till varje.
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(questionPosition.latitude, questionPosition.longitude),
        map: gameMap,
        gameId: questionPosition.id -1  // För möjlighet att radera marker.
      })
      questionPosition.marker = marker;
    })
      //console.log(markers);
  });

  

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(runGame)                      // Varje gång spelaren ändrar positon kör vi spelet.
  }
  
}; // Stänger initMap



function runGame(pos) {                                                                           // Kör spelet.
  
$('#points').text(points);
        //för att ha tillgång till email
        var email = getCookie('email');
        
        //anropa api-funktionen för att uppdatera db med poäng
        //updatePointsAPI(email, points);

    playerMarker.setPosition(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));  // Sätter spelaren på den uppdaterade positionen.
      questions.forEach(function(f, index){                                                              // Loopar alla frågor. Varje frågeobjekt heter nu f.
        
         var dist = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude), new google.maps.LatLng(f.latitude, f.longitude));  // Avståndet mellan spelaren och varje frågas sparas här.
        
         if (dist <= 20 && f.alreadyAnswered != true) {                                                  // Om spelaren är inom 20 meter och frågan inte visas.
          var yourQuestion = f;                                                               // Frågan ska visas.
          yourQuestion.showModal = true;
          console.log(yourQuestion);                                                        
          
          if (yourQuestion) {                                                        // Om frågan då visas.
            $("#question-modal").modal('show');                                                 // Visa frågemodalen.
           
            $('#start-questiion-button').on('click', function(event) {                          // Om man trycker på "Jag vill svara på frågan"-knappen.
            console.log(yourQuestion);
            console.log(index);
            console.log(questions);
            $('#question').css('display', 'none');                                              // div med id question göms.
            $('#your-question').css('display', 'block');                                        // div med id your-question visas.
            $('#main-question').text(yourQuestion.question);                                               // Visa aktuell fråga i h3 med id main-question. 
            $('#alternative-1').text(yourQuestion.answer_1);                                             // Visa aktuell fråga i button med id #alternative-1
            $('#alternative-2').text(yourQuestion.answer_2);                                             // Visa aktuell fråga i button med id #alternative-2
            $('#alternative-3').text(yourQuestion.answer_3);                                             // Visa aktuell fråga i button med id #alternative-3
            });

            $('#alternative-1').on('click', function(event) {
              if (yourQuestion.answer_1 == yourQuestion.correct_answer) {
                points = points + 3;
                //updatePointsAPI(email, points);
                $('#points').text(points);
                $("#question-modal").modal('hide');
              } else {
                alert('FEL SVAR! NOLL POÄNG!');
                $("#question-modal").modal('hide');
              }
              yourQuestion.marker.setMap(null);
              questions[index].alreadyAnswered = true;
              //delete questions[index];
              console.log(questions);
              //yourQuestion.alreadyAnswered = true;
            });
    
            $('#alternative-2').on('click', function(event) {
              if (yourQuestion.answer_2 == yourQuestion.correct_answer) {
                points = points + 3;
                $('#points').text(points);
                $("#question-modal").modal('hide');
              } else {
                alert('FEL SVAR! NOLL POÄNG!');
                  $("#question-modal").modal('hide');
              }
              yourQuestion.marker.setMap(null);
              questions[index].alreadyAnswered = true;
              //delete questions[index];
              console.log(questions);
              //yourQuestion.alreadyAnswered = true;
            });
    
            $('#alternative-3').on('click', function(event) {
              if (yourQuestion.answer_3 == yourQuestion.correct_answer) {
                points = points + 3;
                //updatePointsAPI(email, points);
                $('#points').text(points);
                $("#question-modal").modal('hide');
              } else {
                alert('FEL SVAR! NOLL POÄNG!');
                $("#question-modal").modal('hide');
              }
              yourQuestion.marker.setMap(null);
              questions[index].alreadyAnswered = true;
              //delete questions[index];
              console.log(questions);
              //yourQuestion.alreadyAnswered = true;
            });
          }                                                                                 

        } else if( dist >= 20 && f.showModal == true) {
            f.showModal = false;
            $("#question-modal").modal('hide');                                                     // Göm frågemodalen.
            $('#your-question').css('display', 'none');                                             // Ändra att aktuell fråga inte syns.
            $('#question').css('display', 'block');                                                 // Visa istället "Jag vill svara på frågan" innehållet.

        } else {                                             // Om spelaren är utanför 20 m från en fråga men fortfarande har frågan aktiv.

          console.log('Frågan ej i närheten');

          
       }
       
      }); // Stänger forEach loopen.

};   // Stänger runGame funktionen.
