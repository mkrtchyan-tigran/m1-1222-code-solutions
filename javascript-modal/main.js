
var $modal = document.querySelector('.modal');
var $survey = document.querySelector('.survey');
var $modalOff = document.querySelector('.modal-no');

function modalOn() {
  $survey.className = 'survey';
}

$modal.addEventListener('click', modalOn);

function surveyOn() {
  $survey.className = 'survey ' + 'hidden';
}

$modalOff.addEventListener('click', surveyOn);
