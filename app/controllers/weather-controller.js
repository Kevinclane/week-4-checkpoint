import store from "../store.js";
import weatherService from "../services/weather-service.js";
import Weather from "../models/weather.js"


function drawWeather() {
  let template = ""
  let weather = store.State.weather
  template = weather.WeatherTemplate
  document.getElementById("weather").innerHTML = template


  // if (store.State.weather.toggle == "F") {
  //   let template = `<div type="button" onclick="app.weatherController.toggleWeather()">${store.State.weather.fahrenheit}°F</div><div>${store.State.weather.city}</div>`
  //   document.getElementById("weather").innerHTML = template
  // } else if (store.State.weather.toggle == "C") {
  //   let template = `<div type="button" onclick="app.weatherController.toggleWeather()">${store.State.weather.celcius}°C</div><div>${store.State.weather.city}</div>`
  //   document.getElementById("weather").innerHTML = template
  // }
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
  }

  toggleWeather() {
    let weather = store.State.weather
    if (weather.toggle == "F") {
      weather.toggle = "C"
    } else if (weather.toggle == "C") {
      weather.toggle = "F"
    }
    // weatherService.toggleWeather(weather)
    drawWeather()
  }
}
