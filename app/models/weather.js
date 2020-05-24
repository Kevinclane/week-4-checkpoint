export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = Math.floor(data.main.temp - 273.15)
    this.fahrenheit = Math.floor((data.main.temp - 273.15) * (9 / 5) + 32)
  }

  get WeatherTemplate() {
    return /*html*/`
    <div>
    ${this.kelvin}
  </div>
  <div>
    ${this.city}
  </div>
    `
  }
}