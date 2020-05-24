export default class Todo {
  constructor(data) {
    this._id = data._id || ""
    this.completed = data.completed || false
    this.user = data.user || ""
    this.description = data.description || ""
  }

  get TodoTemplate() {
    if (this.completed == false) {
      return /*html*/`
      <li>
      <span id=" '${this._id}' " ><input type="checkbox" name="check" onclick="app.todoController.toggleTodoStatus('${this._id}')"> ${this.description}</span> <span><i type="button" onclick="app.todoController.removeTodo('${this._id}')" class="fa fa-times"></i></span>
      </li>
      `
    } else if (this.completed == true) {
      return /*html*/`
      <li>
      <span id=" '${this._id}' " ><input checked type="checkbox" name="check" onclick="app.todoController.toggleTodoStatus('${this._id}')"> <del>${this.description}</del></span> <span><i type="button" onclick="app.todoController.removeTodo('${this._id}')" class="fa fa-times"></i></span>
      </li>
      `
    }
  }
}