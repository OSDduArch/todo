
const $nameForm =  document.querySelector('.nameForm');
const $inputName = $nameForm.querySelector('.inputName');
const $nameBox =  $nameForm.querySelector('.nameBox');
const $USER = localStorage.getItem('USER')

window.addEventListener('DOMContentLoaded', () => {
  if($USER){
    showName($USER);
  }
  $nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!$USER){
      localStorage.setItem('USER', $inputName.value);
      showName($inputName.value);
      $inputName.value = '';
    }
  });
});

function showName(name) {
  $inputName.classList.add('hide');
  $nameBox.textContent = `Hello! ${name}`;
  $nameBox.classList.add('show');
}