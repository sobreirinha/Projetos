const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

//  Cria eventos de clicks
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() { // Função de iniciar o cronômetro

   interval = setInterval (() => {
      if(!isPaused){
         milliseconds +=10;
         if(milliseconds === 1000) {
            seconds ++;
            milliseconds = 0;
         }
         if(seconds === 60 ){
            minutes++;
            seconds = 0;
         }
         minutesEl.textContent = formatTime(minutes);
         secondsEl.textContent = formatTime(seconds);
         millisecondsEl.textContent = formatMilliseconds(milliseconds);
      }
   },10);

   startBtn.style.display = "none";
   pauseBtn.style.display = "block";
};

function pauseTimer() {
   isPaused = true;
   pauseBtn.style.display = "none";
   resumeBtn.style.display = "block";
}

function resumeTimer() {
   isPaused = false;
   pauseBtn.style.display = "block";
   resumeBtn.style.display = "none";
}

function resetTimer() {
   clearInterval(interval);
   minutes = 0;
   seconds = 0;
   milliseconds = 0;

   minutesEl.textContent = "00";
   secondsEl.textContent = "00";
   millisecondsEl.textContent = "000";

   startBtn.style.display = "block"; // Mostrar botão "Iniciar"
   pauseBtn.style.display = "none"; // Ocultar botão "Pausar"
   resumeBtn.style.display = "none"; // Ocultar botão "Continuar"

   isPaused = false; 
}

function formatTime(time){
   return time < 10 ? `0${time}`: time;
};

function formatMilliseconds(time){
   return time < 100 ? `${time}`.padStart(3,"0"): time; 
}


// Cria lista de voltas
const lapBtn = document.querySelector("#lapBtn");
const lapList = document.querySelector("#lapList");

lapBtn.addEventListener("click", recordLap);

function recordLap() {
   const lapTime = formatTime(minutes) + " : " + formatTime(seconds) + " : " + formatMilliseconds(milliseconds); // Formata no html
   const lapItem = document.createElement("li"); // Cria cada item 
   lapItem.textContent = lapTime;
   lapList.appendChild(lapItem); // Coloca filho
}

const resetLapBtn = document.querySelector("#resetLapBtn");

resetLapBtn.addEventListener("click", resetLaps);

function resetLaps() {
   lapList.innerHTML = ""; // Limpa a lista de voltas
}
