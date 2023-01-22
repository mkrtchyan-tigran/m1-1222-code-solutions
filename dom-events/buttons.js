function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var $clickMe = document.querySelector('.click-button');

$clickMe.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var $hoverMe = document.querySelector('.hover-button');

$hoverMe.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var doubleClickMe = document.querySelector('.double-click-button');

doubleClickMe.addEventListener('dblclick', handleDoubleClick);
