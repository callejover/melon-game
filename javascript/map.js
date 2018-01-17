function initMap() {                                            // Startar kartan
  if (navigator.geolocation) {                                  // Ser om browsern stöder att hitta din plats
      navigator.geolocation.getCurrentPosition(function(position) {           // Skapar ett callback som om lyckas kör function(position)
    
        let playerPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); //Sparar din positon i variabeln playerPositon

        let map = new google.maps.Map(document.getElementById('map'), {       // Skapar en ny karta
           zoom: 18,
          center: playerPosition
        });

        let playerMarker = new google.maps.Marker({             // Skapar en ny markering på spelarens position
          position: playerPosition,
          map: map
        }) 
    

      function autoUpdate() {                                   // Funktion som ska köras hela tiden och uppdatera vår position
        navigator.geolocation.getCurrentPosition(function(position) {         // Samma callback som tidigare

          let newPlayerPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // Sparar vår position i en ny variabel som heter newPlayerPosition
                                              
          if(playerMarker) {                                    // Om det finns en "marker", sätt den till vår nya position
            playerMarker.setPosition(newPlayerPosition);
          } 
      
          map.setCenter(newPlayerPosition);                     // Centrera oss vid den nya markeringen
        });                                                     // Callback avslutat
      
          setTimeout(autoUpdate, 10000);                        // Kör funktionen varje 10e sekund för att uppdatera

          console.log('spelaren position är uppdaterad');       // Svar att positionen har uppdaterats
      }
      
    autoUpdate();                                               // I slutet av autoUpdate kallar vi funktionen

  });

  } else {
    console.log('inaktiv karta');                               // Felmeddelande ifall browsern inte stöder platsinformation
  } 
}