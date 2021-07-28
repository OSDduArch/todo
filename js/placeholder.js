// const $inputName = document.querySelector('.inputName');
// const $inputToDo = document.querySelector('.inputToDo');
const inputArray = [$inputName, $inputToDo];

inputArray.forEach((input)=> {
  input.addEventListener('focus', (e) => {
    // console.log(e.target);
    e.target.classList.add('invisible')
  }) 
  input.addEventListener('blur', (e) => {
    console.log(e.target);
    e.target.classList.remove('invisible');
  })
})