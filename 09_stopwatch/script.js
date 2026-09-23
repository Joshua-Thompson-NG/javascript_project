// STOPWATCH PROGRAM

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer = null;
let startTime = 0;
let elaspedTime = 0;
let isRunning = false;

startBtn.addEventListener("click",start);

stopBtn.addEventListener("click",stop);

resetBtn.addEventListener("click",reset)


function start (){
    if(!isRunning){
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update,10);
        isRunning = true;


    }
}

function stop (){
    if(isRunning){
        clearInterval(timer);
        elaspedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset (){
    clearInterval(timer);
    startTime = 0;
    elaspedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00.00";
}

function update (){
    // GET CURRENT TIME
    const currentTime = Date.now();
    elaspedTime = currentTime - startTime;
    let minutes = Math.floor(elaspedTime / 60000);
    let hours = Math.floor(elaspedTime / 3600000);
    let seconds = Math.floor((elaspedTime % 60000) / 1000);
    let milliseconds = Math.floor(elaspedTime % 1000 / 10);

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    milliseconds = String(milliseconds).padStart(2,'0');


    display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}