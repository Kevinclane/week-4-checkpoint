import clockService from "../services/clock-service.js"



function _drawClock() {
  console.log("clock")
}

export default class ClockController {
  constructor() {
    _drawClock()
    clockService.clockData()
  }


}