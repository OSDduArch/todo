const API_KEY = '14e3157904ea273be5e927d1efdc6370';

function handleGeoError() {
  console.log('cant')
}

function handleGeoSucces(position){
  console.log(position);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem('coords');
  if(loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather()
  }
}

function init() {
  loadCoords();
}

init();