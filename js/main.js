// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!


// input element
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


const intervalCountdown = setInterval(countDown, 1000) // richiamo la funzione "countdown" e verrà eseguita ogni secondo


function countDown() {  // creo una funzione "countdown"

    const now = new Date();  // recupero la data attuale

    const monday = new Date("2023-02-06 09:30");  //recupero la data di lunedì
    
    const millisecondsNow = now.getTime();  // recupero i millisecondi attuali
    const millisecondsMonday = monday.getTime(); // recupero i millisecondi di lunedi
    
    const millisecondsDifference = millisecondsMonday - millisecondsNow;  // ottengo i millisecondi che mi separano da lunedì con una sottrazione
    
    const second = 1000;  // moltipico i diversi fattori per ottenere secondi, minuti, ore e giorni
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const printDay = Math.floor(millisecondsDifference / day);  // divido i millisecondi per ottenere secondi, minuti, ore e giorni che mi separano da lunedì
    const printHours = Math.floor((millisecondsDifference % day) / hour);
    const printMinutes = Math.floor((millisecondsDifference % hour) / minute);
    const printSecond = Math.floor((millisecondsDifference % minute) / second);
    
    // output element
    // stampo i risultati nell' HTML
    daysEl.innerHTML = (printDay < 10) ? `0${printDay}` : printDay; // se il valore è minore di 10 aggiungo uno zero davanti
    hoursEl.innerHTML = (printHours < 10) ? `0${printHours}` : printHours;
    minutesEl.innerHTML = (printMinutes < 10) ? `0${printMinutes}` : printMinutes
    secondsEl.innerHTML =  (printSecond < 10) ? `0${printSecond}` : printSecond

      if(
        printSecond <= 0 &&
        printMinutes <= 0 &&
        printHours <= 0 &&
        printDay <= 0
    ){
        clearInterval(intervalCountdown);
    }

}

