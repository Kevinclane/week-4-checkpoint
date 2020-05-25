import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {

  constructor() {
    this.getWeather()
  }
  async getWeather() {
    let res = await weatherApi.get();
    store.commit("weather", new Weather(res.data));
  }

  // toggleWeather(weather) {
  //   store.State.weather = weather
  // }
}

const weatherService = new WeatherService();
export default weatherService;
