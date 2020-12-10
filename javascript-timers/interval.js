var $heading = document.querySelector('h1');
var x = 3;
function countDown() {
  if (x === 0) {
    x = '~Earth Beeeelooowww Us~';
    clearInterval(start);
  }
  $heading.textContent = x;
  console.log(x);
  x--;
}
var start = setInterval(countDown, 1 * 1000);
