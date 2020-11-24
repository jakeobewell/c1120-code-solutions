var modalButton = document.querySelector('.modal-button');

var background = document.querySelector('.page-container');

var modalContainer = document.querySelector('.modal-container');

var noButton = document.querySelector('.no-button');

modalButton.addEventListener('click', function(event) {
  background.className = 'page-container open';
  modalContainer.removeAttribute('hidden');
})

noButton.addEventListener('click', function(event) {
  background.className = 'page-container';
  modalContainer.setAttribute('hidden', 'hidden');
})
