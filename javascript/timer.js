// Timer during the gameplay
let startTimer = "10:06"; 
let interval = setInterval(function() {
    let timer = startTimer.split(':');
    let minutes = parseInt(timer[0], 10);
    let seconds = parseInt(timer[1], 10);
        --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) {
            clearInterval(interval)
        };
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        if (minutes == 0 && seconds == 0) {
            clearInterval(interval)
            $('#end-game').css('z-index', 3000);
            $('#end-game').modal('show', 'display', 'block')
            $('#end-game-modal').css('display', 'block')                
        }
        $('.timer').html(minutes + ':' + seconds);
startTimer = minutes + ':' + seconds;
}, 1000);

// Timer before the game starts
let startGameTimer = 5;
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