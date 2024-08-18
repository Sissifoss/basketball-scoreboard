
let scoreHome = 0
let scoreGuest = 0 

function add1Home() {
    scoreHome += 1
    document.getElementById('score-home').innerText = scoreHome
}

function add2Home() {
    scoreHome += 2
    document.getElementById('score-home').innerText = scoreHome
}

function add3Home() {
    scoreHome += 3
    document.getElementById('score-home').innerText = scoreHome
}

function add1Guest() {
    scoreGuest += 1
    document.getElementById('score-guest').innerText = scoreGuest
}

function add2Guest() {
    scoreGuest += 2
    document.getElementById('score-guest').innerText = scoreGuest
}

function add3Guest() {
    scoreGuest += 3
    document.getElementById('score-guest').innerText = scoreGuest
}

function reset() {
    scoreGuest = 0
    scoreHome = 0
    document.getElementById('score-home').innerText = scoreHome
    document.getElementById('score-guest').innerText = scoreGuest
}