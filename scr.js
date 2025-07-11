let day = document.querySelector('.day')
let month = document.querySelector('.month')
let date = document.querySelector('.date')
let year = document.querySelector('.year')
let hrs = document.querySelector('.hrs')
let secs = document.querySelector('.secs')
let mins = document.querySelector('.mins')
let formatChanger = document.querySelector('#formatChanger')

let presentTime = new Date()

day.innerHTML = presentTime.toLocaleString('default', { weekday: 'long' })
month.innerHTML = presentTime.toLocaleString('default', { month: 'short' })
date.innerHTML = presentTime.getDate()
year.innerHTML = presentTime.getFullYear()

setInterval(() => {
    let presentTime = new Date()
    
    if(formatChanger.checked){
        hrs.innerHTML = presentTime.getHours()
    }
    else if((presentTime.getHours() % 12) == 0){
        hrs.innerHTML = presentTime.getHours()

    }
    else if((presentTime.getHours() % 12) < 10 ) {
        hrs.innerHTML = '0' + presentTime.getHours() % 12
    }
    else{
        hrs.innerHTML = presentTime.getHours() % 12
    }
    
    secs.innerHTML = (presentTime.getSeconds() < 10 ? '0' : '' ) + presentTime.getSeconds()
    mins.innerHTML = (presentTime.getMinutes() < 10 ? '0' : '' ) + presentTime.getMinutes()
});
