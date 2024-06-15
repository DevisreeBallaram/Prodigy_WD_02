let milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;
let timeshow = document.getElementById('timeshow');
let timeref;

document.getElementById('start').onclick = function() {
    timeref = setInterval(updateTime, 10);
};

document.getElementById('pause').onclick = function() {
    clearInterval(timeref);
};

document.getElementById('reset').onclick = function() {
    clearInterval(timeref);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeshow.innerHTML = "00 : 00 : 00 : 000";
    document.getElementById('lapscontainer').innerHTML = "";
};

document.getElementById('lap').onclick = function() {
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 100 ? '0' + (milliseconds < 10 ? '00' + milliseconds : milliseconds) : milliseconds;
    let lapTime = `${h} : ${m} : ${s} : ${ms}`;
    let lapElement = document.createElement('div');
    lapElement.textContent = lapTime;
    document.getElementById('lapscontainer').appendChild(lapElement);
};

function updateTime() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        seconds += 1;
        milliseconds = 0;
        if (seconds == 60) {
            minutes += 1;
            seconds = 0;
            if (minutes == 60) {
                hours += 1;
                minutes = 0;
            }
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 100 ? '0' + (milliseconds < 10 ? '00' + milliseconds : milliseconds) : milliseconds;

    timeshow.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}