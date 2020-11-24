var lightBulb = document.querySelector('.lightbulb');

var backGround = document.querySelector('.background');

var i = 0;

addEventListener('click', function(event) {
  i += 1;
  if (i % 2 === 0) {
    lightBulb.className = 'lightbulb on';
    backGround.className = 'background on';
  }
  else if (i % 2 !== 0) {
    lightBulb.className = 'lightbulb off';
    backGround.className = 'background off';
  }
})
