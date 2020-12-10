var circles = document.querySelectorAll('.fa-circle');
var currentImage = document.querySelector('img');
var rightArrow = document.querySelector('.fas.fa-angle-right');
var leftArrow = document.querySelector('.fas.fa-angle-left');
var circleContainer = document.querySelector('.container');
var position = 0;
var images = [
  "images/001.png",
  "images/004.png",
  "images/007.png",
  "images/025.png",
  "images/039.png"
]

function changeRight() {
  if (position === 4) {
    position = 0;
    circles[position].className = 'fas fa-circle';
    circles[4].className = 'far fa-circle';
    currentImage.setAttribute('src', images[position]);
  }
  else {
  position++
  circles[position].className = 'fas fa-circle';
  circles[position - 1].className = 'far fa-circle';
  currentImage.setAttribute('src', images[position]);
  }
}

function changeLeft() {
  if (position === 0) {
    position = 4;
    circles[position].className = 'fas fa-circle';
    circles[0].className = 'far fa-circle';
    currentImage.setAttribute('src', images[position]);
  }
  else {
  position--
  circles[position].className = 'fas fa-circle';
  circles[position + 1].className = 'far fa-circle';
  currentImage.setAttribute('src', images[position]);
  }
}

function changePosition(event) {
  if (event.target.matches('.far')) {
    for (var i = 0; i < circles.length; i++)
    if (circles[i] === event.target) {
      circles[i].className = 'fas fa-circle';
      currentImage.setAttribute('src', images[i]);
      position = i;
    }
    else {
      circles[i].className = 'far fa-circle';
    }
  }
}

circleContainer.addEventListener('click', changePosition);
rightArrow.addEventListener('click', changeRight);
leftArrow.addEventListener('click', changeLeft);

setInterval(changeRight, 3000);
