var buttonClick = document.querySelector('.hot-button');

var clickCount = document.querySelector('.click-count');

var i = 0;

addEventListener('click', function(event) {
  i += 1;
  clickCount.textContent = 'Clicks: ' + i;
  if (i < 4) {
    buttonClick.className = 'hot-button cold';
  }
  else if (i < 7) {
    buttonClick.className = 'hot-button cool';
  }
  else if (i < 10) {
    buttonClick.className = 'hot-button tepid';
  }
  else if (i < 13) {
    buttonClick.className = 'hot-button warm';
  }
  else if (i < 16) {
    buttonClick.className = 'hot-button hot';
  }
  else if (i >= 16) {
    buttonClick.className = 'hot-button nuclear';
  }
})
