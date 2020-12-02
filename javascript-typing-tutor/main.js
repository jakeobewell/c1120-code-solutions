var letters = document.querySelectorAll("span");

var i = 0;

addEventListener('keydown', function (event) {

  if (event.key === letters[i].textContent) {
    letters[i].className = 'correct';
    letters[i + 1].className = 'current-letter';
    i += 1;
  }

  else {
    letters[i].className = 'wrong';
    }
})
