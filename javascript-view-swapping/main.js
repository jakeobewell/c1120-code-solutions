var tabContainer = document.querySelector('.tab-container');

var tabNodes = document.querySelectorAll('.tab')

var viewContainer = document.querySelector('.view-container');

var viewNodes = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabNodes.length; i++) {
      if (tabNodes[i] === event.target) {
        tabNodes[i].className = 'tab active';
      }
      else {
        tabNodes[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view')
    for (x = 0; x < viewNodes.length; x++) {
      if (dataView === viewNodes[x].getAttribute('data-view')) {
        viewNodes[x].className = 'view';
      }
      else {
        viewNodes[x].className = 'view hidden';
      }
    }
  }
})
