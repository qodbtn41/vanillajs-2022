const API_KEY = "9d50a179dd0c653b617e94f60027a36a";

function callApi(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
      city.innerText = data.name;
    })
    .catch((reason) => {
      console.log(reason);
    });
}

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(position);
  console.log("You live in ", latitude, longitude);
  callApi(latitude, longitude);
}
function onGeoError() {
  console.log("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
