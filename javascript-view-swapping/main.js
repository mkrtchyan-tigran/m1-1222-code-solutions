var tabContainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === event.target) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    var view = event.target.getAttribute('data-view');
    for (var l = 0; l < views.length; l++) {
      if (views[l].getAttribute('data-view') === view) {
        views[l].className = 'view';
      } else {
        views[l].className = 'view hidden';
      }
    }
  }
});
