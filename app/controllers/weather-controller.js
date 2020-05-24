import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let template = `<div type="button" onclick="">${store.State.weather.fahrenheit}°F</div><div>${store.State.weather.city}</div>`
  document.getElementById("weather").innerHTML = template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
  }
}
