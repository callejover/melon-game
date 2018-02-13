let startingDelay = 6; // Finns för att tajma starten på spelet medan startGameInterval körs.
let gameTimer = 60 + startingDelay; // Hur länge ska vi spela.
let startGameTimer = 5; // Nedräning innan spelet börjar.

let startGameInterval = setInterval(function() {
    startGameTimer--;
    $('#start-game-timer').text(startGameTimer);
    if (startGameTimer === 0) {
        clearInterval(startGameInterval);
        $('#start-game-timer').html('START!!!');
        setTimeout(function() { 
            $(".close").click(); 
        }, 1000);
    }
}, 1000);

let gameInterval = setInterval(function() {
    gameTimer--;
    $('.timer').text(gameTimer);
    if (gameTimer === 0) clearInterval(gameInterval);
}, 1000);