var $heading = document.querySelector('h1');

function changeHeading() {
  $heading.textContent = "Hello There";
}

function changeAfterTwoSeconds() {
  setTimeout(changeHeading, 2*1000);
}

window.addEventListener('DOMContentLoaded', changeAfterTwoSeconds());
