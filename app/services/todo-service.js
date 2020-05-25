import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/kevin/todos/",
  timeout: 8000
});

class TodoService {
  constructor() {
    this.getTodos()
  }

  getTodos() {
    todoApi.get("")
      .then(res => {
        let todos = res.data.data.map(t => new Todo(t))
        store.commit('todos', todos)
      })
      .catch(e => console.error(e))
  }

  todocount() {
    let count = 0
    let currentTodos = store.State.todos
    let i = 0
    while (i < currentTodos.length) {
      if (currentTodos[i].completed == false) {
        count++
      }
      i++
    }
    return count
  }

  addTodoAsync(todo) {
    let newTodo = new Todo(todo)
    todoApi.post("", newTodo)
      .then(res => {
        this.getTodos()
      })
      .catch(e => console.error(e))
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    if (todo) {
      if (todo.completed == true) {
        todo.completed = false
      } else {
        todo.completed = true
      }
    }

    todoApi.put(todoId, todo)
      .then(res => {
        this.getTodos()
      })
      .catch(e => console.error(e))

  }

  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
      .then(res => {
        this.getTodos()
      })
      .catch(e => console.error(e))
  }
}

const todoService = new TodoService();
export default todoService;
