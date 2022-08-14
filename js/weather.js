function geoOk(position) {
  const API_KEY = "c59b53880a7155fc364781a19d028706";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector(
        "#weather > span:nth-child(1) > span:nth-child(2)"
      );
      const weather = document.querySelector(
        "#weather > span:nth-child(2) > span:nth-child(2)"
      );
      const temp = document.querySelector(
        "#weather > span:nth-child(3) > span:nth-child(2)"
      );
      const tempFeels = document.querySelector(
        "#weather > span:nth-child(4) > span:nth-child(2)"
      );
      const humidity = document.querySelector(
        "#weather > span:nth-child(5) > span:nth-child(2)"
      );
      document.getElementById(
        "iconId"
      ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      name.innerText = `${data.name}`;
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = `${Math.round(data.main.temp)}℃`;
      tempFeels.innerText = `${Math.round(data.main.feels_like)}℃`;
      humidity.innerText = `${data.main.humidity}%`;
    });
}

function geoError() {
  alert("Failed to find weather where you where");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
