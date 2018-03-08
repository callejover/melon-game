// ======================================================================================================
// Globala variabler
// ======================================================================================================

var gameMap = null;
var playerMarker = null;
var points = 0;
var questionImg = '../pictures/questionmark.png';
var image = '../pictures/melonmarker.png';
var mapStyles = [
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

function initMap() {
  getQuestions()
  gameMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    disableDefaultUI: true,
    enableHighAccuracy: true,
    styles: mapStyles
  }); 
  
  navigator.geolocation.getCurrentPosition(function(position) {
    var player = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    questions.forEach(function(questionPosition) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(questionPosition.latitude, questionPosition.longitude),
        map: gameMap,
        icon: questionImg
      })
      questionPosition.marker = marker;
    })

    gameMap.setCenter(player);
    playerMarker = new google.maps.Marker({
      position: player,
      map: gameMap,
      icon: image
    });
  });

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(runGame)
  }
  
}; // Close initMap



function runGame(pos) {       

  var email = getCookie('email'); 

  if (points === 0) {
    getUser(email, function (user) {
      $('#current-score-board-team > p').first().text(user.name + ':');
    });
  } 

  $('#points').text(points);

  playerMarker.setPosition(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));

  questions.forEach(function(f, index){
          
      var dist = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude), new google.maps.LatLng(f.latitude, f.longitude));
    
      if (dist <= 20 && f.alreadyAnswered != true) {
      var yourQuestion = f;
      yourQuestion.showModal = true;                                                        
      
      if (yourQuestion) {
        $("#question-modal").modal('show');
        $('#start-questiion-button').on('click', function(event) {
        $('#question').css('display', 'none');
        $('#your-question').css('display', 'block');
        $('#main-question').text(yourQuestion.question);
        $('#alternative-1').text(yourQuestion.answer_1);
        $('#alternative-2').text(yourQuestion.answer_2);
        $('#alternative-3').text(yourQuestion.answer_3);
        });
        

        $('#alternative-1').on('click', function(event) {
          if (yourQuestion.alreadyAnswered) {
            return;
          }

          if (yourQuestion.answer_1 == yourQuestion.correct_answer) {
            points = points + correct_score;
            updatePointsAPI(email, correct_score);
            $('#points').text(points);
            $(this).css('background-color', 'green');
            $(this).html('RÄTT');
            $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', true);
            setTimeout(function() { 
              $("#question-modal").modal('hide');
              $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', false);
              $('#alternative-1, #alternative-2, #alternative-3').removeAttr('style', 'html')
            }, 2500);
          } else {
            $(this).css('background-color', 'red');
            $(this).html('FEL');
            $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', true);
            setTimeout(function() { 
              $("#question-modal").modal('hide');
              $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', false);
              $('#alternative-1, #alternative-2, #alternative-3').removeAttr('style', 'html')
            }, 2500);
          }
          yourQuestion.alreadyAnswered = true;
          yourQuestion.marker.setMap(null);
        }); // Closes click on first button
        

        $('#alternative-2').on('click', function(event) {
          if (yourQuestion.alreadyAnswered) {
            return;
          }

          if (yourQuestion.answer_2 == yourQuestion.correct_answer) {
            points = points + correct_score;
            updatePointsAPI(email, correct_score);
            $('#points').text(points);
            $(this).css('background-color', 'green');
            $(this).html('RÄTT');
            $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', true);
            setTimeout(function() { 
              $("#question-modal").modal('hide');
              $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', false);
              $('#alternative-1, #alternative-2, #alternative-3').removeAttr('style', 'html')
            }, 2500);
          } else {
            $(this).css('background-color', 'red');
            $(this).html('FEL');
            $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', true);
              setTimeout(function() { 
                $("#question-modal").modal('hide');
                $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', false);
                $('#alternative-1, #alternative-2, #alternative-3').removeAttr('style', 'html')
              }, 2500);
          }
          yourQuestion.alreadyAnswered = true;
          yourQuestion.marker.setMap(null);
        }); // Closes click on second button

        
        $('#alternative-3').on('click', function(event) {
          if (yourQuestion.alreadyAnswered) {
            return;
          }

          if (yourQuestion.answer_3 == yourQuestion.correct_answer) {
            points = points + correct_score;
            updatePointsAPI(email, correct_score);
            $('#points').text(points);
            $(this).css('background-color', 'green');
            $(this).html('RÄTT');
            $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', true);
            setTimeout(function() { 
              $("#question-modal").modal('hide');
              $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', false);
              $('#alternative-1, #alternative-2, #alternative-3').removeAttr('style', 'html')
            }, 2500);
          } else {
            $(this).css('background-color', 'red');
            $(this).html('FEL');
            $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', true);
            setTimeout(function() { 
              $("#question-modal").modal('hide');
              $('#alternative-1, #alternative-2, #alternative-3').attr('disabled', false);
              $('#alternative-1, #alternative-2, #alternative-3').removeAttr('style', 'html')
            }, 2500);
          }
          yourQuestion.alreadyAnswered = true;
          yourQuestion.marker.setMap(null);
        }); // Closes click on third button
      }

      } else if( dist >= 20 && f.showModal == true) {
          f.showModal = false;
          $("#question-modal").modal('hide'); 
          $('#your-question').css('display', 'none'); 
          $('#question').css('display', 'block');

      } else {
      } 
         
    }); // Close forEach loop
};   // Close runGame
