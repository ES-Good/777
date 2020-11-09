let btn = document.querySelector('.rotate-wheel-btn');
let wheel = document.querySelector('.wheel')

document.onclick = function (event) {
    if(event.target.classList.contains('rotate-wheel-btn')){
        wheel.style.transform = 'rotate(1140deg)' //шаг 60deg
    }   
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var options = {
        opacity: 0.7,
    }
    var instances = M.Modal.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {
        constrainWidth: false
    }
    var instances = M.Dropdown.init(elems);
  });