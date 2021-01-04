let count = 3;

const blastoff = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(blastoff);
    return;
  }
  console.log(count);
  count--;

}, 1000);
