let milisegundosEl = document.getElementById("milisegundos-el")
let segundosEl = document.getElementById("segundos-el")
let minutosEl = document.getElementById("minutos-el")
let horasEl = document.getElementById("horas-el")
let milisegundos = 0
let segundos = 0
let minutos = 0
let horas = 0
let intervalIdsegundos
let tiempotardado

function segundosincrement() {
    milisegundos += 1

    if (milisegundos === 100) {
        milisegundos = 0
        segundos += 1
    }
    if (segundos === 60) {
        segundos = 0
        minutos += 1
    }

    if (minutos === 60) {
        minutos = 0
        horas += 1
    }
    milisegundosEl.textContent = milisegundos
    segundosEl.textContent = segundos
    minutosEl.textContent = minutos
    horasEl.textContent = horas
}


document.getElementById("f_segundos").addEventListener("click", function (event) {
    if (!intervalIdsegundos) {
        intervalIdsegundos = setInterval(segundosincrement, 10)

    } else {
        clearInterval(intervalIdsegundos)
        intervalIdsegundos = null
        tiempotardado = "has tardado en corregir=" + horas + ":" + minutos + ":" + segundos + ":" + milisegundos
        console.log(tiempotardado)
    }
});


let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
console.log(saveEl)


function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if (count > 0) {
        count = count - 1
        countEl.textContent = count
    }
}

let intervalId;
let delayTimer;

document.getElementById("increment-btn").addEventListener("mousedown", function (event) {
    let delayFunction = function () {
        increment();
        intervalId = setInterval(increment, 100)
    }
    delayTimer = setTimeout(delayFunction, 1000)
});

document.getElementById("increment-btn").addEventListener("mouseup", function (event) {
    clearTimeout(delayTimer)
    clearInterval(intervalId)
});

document.getElementById("decrement-btn").addEventListener("mousedown", function (event) {
    let delayFunction = function () {
        decrement()
        intervalId = setInterval(decrement, 100)
    }
    delayTimer = setTimeout(delayFunction, 1000)
});

document.getElementById("decrement-btn").addEventListener("mouseup", function (event) {
    clearTimeout(delayTimer)
    clearInterval(intervalId)
});


let sumEl = document.getElementById("sume-el")
console.log(sumEl)
let countsuma = 0

function save() {

    countsuma = countsuma + count
    sumEl.textContent = countsuma

    let countStr = " - " + count
    saveEl.textContent += countStr
    console.log(count)

    countEl.textContent = 0
    count = 0
}