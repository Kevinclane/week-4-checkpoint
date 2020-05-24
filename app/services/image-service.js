import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  constructor() {
    this.getImg()
  }

  getImg() {
    imgApi.get("")
      .then(res => {
        if (res.data.large_url) {
          store.commit("bgImg", res.data.large_url)
        } else store.commit("bgImg", res.data.url)
      })
      .catch(e => console.error(e))
  }

}

const imageService = new ImageService();
export default imageService;
