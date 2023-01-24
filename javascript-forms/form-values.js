var $forms = document.querySelector('#contact-form');
$forms.addEventListener('submit', function (event) {
  event.preventDefault();
  var dataStore = {};
  dataStore.name = $forms.elements.name.value;
  dataStore.email = $forms.elements.email.value;
  dataStore.message = $forms.elements.message.value;
  console.log(dataStore);
  $forms.reset();
});
