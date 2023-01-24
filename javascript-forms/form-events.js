function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name ', event.target.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name ', event.target.name);
}
function handleInput(event) {
  console.log('value of ' + event.target.name + ':', event.target.value);

}

const $handleFocus = document.querySelector('#user-name');
const $handleBlur = document.querySelector('#user-email');
const $handleInput = document.querySelector('#user-message');

$handleFocus.addEventListener('focus', handleFocus);
$handleFocus.addEventListener('blur', handleBlur);
$handleFocus.addEventListener('input', handleInput);
$handleBlur.addEventListener('focus', handleFocus);
$handleBlur.addEventListener('blur', handleBlur);
$handleBlur.addEventListener('input', handleInput);
$handleInput.addEventListener('focus', handleFocus);
$handleInput.addEventListener('blur', handleBlur);
$handleInput.addEventListener('input', handleInput);
