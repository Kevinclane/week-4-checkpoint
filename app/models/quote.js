export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }

  get Template() {
    return /*html*/`
    <div >
      "${this.body}"
    </div>
    <div id="author" hidden>
    -${this.author}-
  </div>
    `
  }
}