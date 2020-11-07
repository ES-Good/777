let btn = document.querySelector('.rotate-wheel-btn');
let wheel = document.querySelector('.wheel')

document.onclick = function (event) {
    if(event.target.classList.contains('rotate-wheel-btn')){
        wheel.style.transform = 'rotate(1140deg)' //шаг 60deg
    }   
}