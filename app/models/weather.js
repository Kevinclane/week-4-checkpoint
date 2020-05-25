export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = Math.floor(data.main.temp - 273.15)
    this.fahrenheit = Math.floor((data.main.temp - 273.15) * (9 / 5) + 32)
    this.toggle = data.toggle || "F"
  }

  get WeatherTemplate() {
    if (this.toggle == "F") {
      return /*html*/`
      <div type="button" onclick="app.weatherController.toggleWeather()">
      ${this.fahrenheit}°F
      </div>
      <div>
      ${this.city}
      </div>
      `
    } else if (this.toggle == "C") {
      return /*html*/`
      <div type="button" onclick="app.weatherController.toggleWeather()">
      ${this.celcius}°C
      </div>
      <div>
      ${this.city}
      </div>
      `
    }

  }
}