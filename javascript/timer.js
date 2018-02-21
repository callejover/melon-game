
let startTimer = "00:10"; //start tid, startar tiden samtidigt som modalen räknar ner till "Start!!!"
  let interval = setInterval(function() { //Räknaren under spelet
    let timer = startTimer.split(':'); //Separerar sekunder från minuter
    let minutes = parseInt(timer[0], 10); //Konverterar stringen till en int
    let seconds = parseInt(timer[1], 10);//Konverterar stringen till en int
        --seconds; //Räkna ned 1 i taget
    minutes = (seconds < 0) ? --minutes : minutes; //?? Vet ej ?? Om man ej har den så börjar den på 10:00 och efter en sekund blir den 10:59
        if (minutes < 0) {
            clearInterval(interval)
        };
            seconds = (seconds < 0) ? 59 : seconds; // Om minutes är mindre än 0, displaya 59 och räkna ned seconds
            seconds = (seconds < 10) ? '0' + seconds : seconds; // Om seconds är mindre än 10 displaya 0 + seconds + seconds (00:09)
            if (minutes == 0 && seconds == 0) {
                clearInterval(interval)
                $('#end-game').modal('show', 'display', 'block')
                $('#end-game-modal').css('display', 'block')                
            }
        $('.timer').html(minutes + ':' + seconds); //Skjut in nedräknare in i HTML:en
  startTimer = minutes + ':' + seconds; //startTimer representerar minutes och seconds (10:06)
}, 1000); //räkna ned en sekund i taget

let startGameTimer = 5; // Nedränking innan spelet börjar.
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

// SIMPLE GOBACK FUNCTION -redirects you to last page
function goBack() {
    window.history.back();
  }