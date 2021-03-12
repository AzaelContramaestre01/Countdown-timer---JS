const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newTimer = '19 Feb 2022';

function countdown (){
    const newTimerDate = new Date (newTimer)
    const currentDate = new Date();

const totalSeconds = new Date (newTimerDate - currentDate) / 1000;

const days = Math.floor(totalSeconds / 3600 / 24)
const hours = Math.floor(totalSeconds / 3600) % 24;
const minutes = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minutesEl.innerHTML = minutes;
secondsEl.innerHTML = seconds;

}

// initial call

countdown();

setInterval(countdown, 1000);