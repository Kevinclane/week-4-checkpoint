export default class Todo {
  constructor(data) {
    this._id = data._id || ""
    this.completed = data.completed || false
    this.user = data.user || ""
    this.description = data.description || ""
  }

  get TodoTemplate() {
    return /*html*/`
    <li>
      ${this.description}
    </li>
    `
  }
}