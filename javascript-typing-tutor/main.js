var letters = document.querySelectorAll("span");

addEventListener('keydown', function (event) {

for (var i = 0; i < letters.length; i++) {
  if (event.key === letters[i].textContent) {
    letters[i].className = 'correct';
    letters[i + 1].className = 'current-letter';
  }
  else {
    letters[i].className = 'wrong';
    break;
    }
  }
})
