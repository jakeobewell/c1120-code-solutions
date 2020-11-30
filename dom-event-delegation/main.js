var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function(event) {
  console.log('even target: ', event.target);
  console.log('event target tagname: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('Closest: ', closest);
    closest.remove();
  }
})
