let countHomeEl = document.getElementById("count-home-el")
let countGuestEl = document.getElementById("count-guest-el")
let count = 0

function onePointHomeBtn() {
    count += 1
    countHomeEl.textContent = count
}

function twoPointHomeBtn() {
    count += 2
    countHomeEl.textContent = count
}

function threePointHomeBtn() {
    count += 3
    countHomeEl.textContent = count
}

function resetHome() {
    countHomeEl.textContent = 0
    count = 0
}

function onePointGuestBtn() {
    count += 1
    countGuestEl.textContent = count
}

function twoPointGuestBtn() {
    count += 2
    countGuestEl.textContent = count
}

function threePointGuestBtn() {
    count += 3
    countGuestEl.textContent = count
}

function resetGuest() {
    count = 0
    countGuestEl.textContent = 0
}
