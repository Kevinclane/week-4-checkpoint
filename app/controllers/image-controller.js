import imageService from "../services/image-service.js";
import store from "../store.js";


function _drawBgImg() {
  document.body.style.backgroundImage = `url('${store.State.bgImg}')`
}

export default class ImageController {
  constructor() {
    store.subscribe("bgImg", _drawBgImg);
  }
}
