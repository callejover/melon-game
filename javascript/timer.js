let timer = 60;
let startGameTimer = 5;

let interval = setInterval(function() {
    timer--;
    $('.timer').text(timer);
    if (timer === 0) clearInterval(interval);
}, 1000);

let startGameInterval = setInterval(function() {
    startGameTimer--;
    $('#start-game-timer').text(startGameTimer);
    if (startGameTimer === 0) {
        clearInterval(startGameInterval);
        $('#start-game-timer').html('START!!!');
        setTimeout(function() { 
            $(".close").click(); 
        }, 1000);
        let interval = setInterval(function() {
            timer--;
            $('.timer').text(timer);
            if (timer === 0) clearInterval(interval);
        }, 1000);
    }
}, 1000);