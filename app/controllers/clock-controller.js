import clockService from "../services/clock-service.js"



function _drawClock() {
  let date = clockService.clockData()
  if (date.getHours() == 0) {
    if (date.getMinutes() < 10) {
      document.getElementById("clock").innerHTML = (date.getHours() + 12) + ":" + "0" + date.getMinutes() + " am"
    } else {
      document.getElementById("clock").innerHTML = (date.getHours() + 12) + ":" + date.getMinutes() + " am"
    }

  } else if (date.getHours() >= 1 && date.getHours() < 12) {
    if (date.getMinutes() < 10) {
      document.getElementById("clock").innerHTML = date.getHours() + ":" + "0" + date.getMinutes() + " am"
    } else {
      document.getElementById("clock").innerHTML = date.getHours() + ":" + date.getMinutes() + " am"
    }

  } else if (date.getHours() >= 12 && date.getHours() < 13) {
    if (date.getMinutes() < 10) {
      document.getElementById("clock").innerHTML = date.getHours() + ":" + "0" + date.getMinutes() + " pm"
    } else {
      document.getElementById("clock").innerHTML = date.getHours() + ":" + date.getMinutes() + " pm"
    }

  } else if (date.getHours() >= 13) {
    if (date.getMinutes() < 10) {
      document.getElementById("clock").innerHTML = (date.getHours() - 12) + ":" + "0" + date.getMinutes() + " pm"
    } else {
      document.getElementById("clock").innerHTML = (date.getHours() - 12) + ":" + date.getMinutes() + " pm"
    }
  }
}


export default class ClockController {
  constructor() {
    setInterval(_drawClock, 1000)
  }


}