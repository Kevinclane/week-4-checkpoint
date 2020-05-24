import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let template = ""
  let currentTodos = store.State.todos
  currentTodos.forEach(t => template += t.TodoTemplate)
  document.getElementById("todos").innerHTML = template
}


export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      description: form.task.value
    };
    form.reset()
    TodoService.addTodoAsync(todo);
  }

  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
