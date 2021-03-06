import store from "../store.js";
import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});


class QuoteService {
  constructor() {
    this.getQuote()
  }

  getQuote() {
    _quoteApi.get("")
      .then(res => {
        store.commit("quote", new Quote(res.data.quote))
      })
      .catch(e => console.error(e))
  }
}

const quoteService = new QuoteService();
export default quoteService;
