const secondDiv = document.querySelector('.second');
const start = document.getElementById('strat')
const end = document.getElementById('stop')
const reset = document.getElementById('reset')
const minut = document.querySelector('.minut')
const hour = document.querySelector('.hour')

let second = 0;
let interval;
let minutes = 0;
let hours = 0;
start.addEventListener('click', () => {
    interval = setInterval(() => {
        second += 1
        secondDiv.innerHTML = second
        if (second === 60) {
            minutes += 1;
            minut.innerHTML = minutes
            second = 0;
        }

        if (minutes === 60) {
            hours += 1;
            hour.innerHTML = hours
            minutes = 0;
        }
    }, 1000)
    start.disabled = true
})
end.addEventListener('click', () => {
    clearInterval(interval);
    start.disabled = false
})
reset.addEventListener('click', () => {
    clearInterval(interval);
    second = 0
    secondDiv.innerHTML = '00'

    minutes = 0;
    minut.innerHTML = '00'
    hours = 0;
    hour.innerHTML = '00'
    start.disabled = false
})









































































// ahsan