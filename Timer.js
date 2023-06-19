let counter = 0;
let timer = 0;
let intervalId;

function increment() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
}

function decrement() {
    counter--;
    document.getElementById('counter').innerHTML = counter;
}

function startTimer() {
    clearInterval(intervalId);
    let inputTime = 0; 
    inputTime = parseInt(document.getElementById('inputTime').value);
    if (isNaN(inputTime) || inputTime <= 0) {
        alert('Ingrese tiempo en segundos.');
        return;
    }

    timer = inputTime;
    document.getElementById('timer').innerHTML = timer;
    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timer--;
    document.getElementById('timer').innerHTML = timer;
    if (timer === 0) {
        document.getElementById('timer').innerHTML = timer;      
        clearInterval(intervalId);
        alert('¡SE ACABO!');
    }
}