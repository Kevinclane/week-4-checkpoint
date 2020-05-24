import WeatherService from "../services/weather-service.js";
import store from "../store.js";


function drawWeather() {
  let template = `<div type="button" onclick="">${store.State.weather.fahrenheit}°F</div><div>${store.State.weather.city}</div>`
  document.getElementById("weather").innerHTML = template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
  }
}
