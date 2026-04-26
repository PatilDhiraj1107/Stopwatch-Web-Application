let timer;
let [ms, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById('display');
let lapsList = document.getElementById('lapsList');
let lapsContainer = document.getElementById('lapsContainer');

function updateTime() {
    ms++;
    if (ms == 100) {
        ms = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let msDisplay = ms < 10 ? "0" + ms : ms;
    
    display.innerHTML = `${h}:${m}:${s}:${msDisplay}`;
}

document.getElementById('startBtn').onclick = function() {
    clearInterval(timer);
    timer = setInterval(updateTime, 10);
};

document.getElementById('pauseBtn').onclick = function() {
    clearInterval(timer);
};

document.getElementById('resetBtn').onclick = function() {
    clearInterval(timer);
    [ms, seconds, minutes, hours] = [0, 0, 0, 0];
    display.innerHTML = "00:00:00:00";
    lapsList.innerHTML = "";
    lapsContainer.style.display = "none";
};

document.getElementById('lapBtn').onclick = function() {
    if (display.innerHTML !== "00:00:00:00") {
        lapsContainer.style.display = "block";
        let li = document.createElement('li');
        li.innerHTML = `<span>Lap ${lapsList.children.length + 1}</span> <span>${display.innerHTML}</span>`;
        lapsList.appendChild(li);
    }
};