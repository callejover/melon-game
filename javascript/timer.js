let startingDelay = 6; // Finns för att tajma starten på spelet medan startGameInterval körs.
let gameTimer = 60 + startingDelay; // Hur länge ska vi spela.
let startGameTimer = 5; // Nedräning innan spelet börjar.

let startGameInterval = setInterval(function() { // Räknaren man möts av när man öppnar spelsidan.
    startGameTimer--;
    $('#start-game-timer').text(startGameTimer);
    if (startGameTimer === 0) {
        clearInterval(startGameInterval);
        $('#start-game-timer').html('START!!!'); // När räknaren når 0, byt html till Start!!!
        setTimeout(function() { 
            $(".close").click(); // En sekund efter Start!!! kommit upp i modalen, stäng modalen med ett klick på close.
        }, 1000);
    }
}, 1000);

let gameInterval = setInterval(function() { // Ränaren under spelet.
    gameTimer--;
    $('.timer').text(gameTimer);
    if (gameTimer === 0) clearInterval(gameInterval);
}, 1000);