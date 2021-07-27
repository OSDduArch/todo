const $body = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  $body.style.background = `url(img/${Math.floor(Math.random()*7 + 1)}.jpg) no-repeat center/ cover`
})