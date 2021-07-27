const clock = document.querySelector('.clock');

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  
  clock.textContent = `${hour<10? `0${hour}`: hour}:${minutes<10? `0${minutes}`: minutes}`
}

setInterval(getTime, 500);
