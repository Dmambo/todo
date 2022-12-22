export default class TodoList {
  constructor(ui) {
    this.ui = ui;
    this.todos = [];
    this.todoInput = document.querySelector('.input');
    this.btnClear = document.querySelector('.btn-clear');
    this.ulElement = document.getElementById('list-item');
  }

  add(description) {
    const todo = {
      description,
      completed: false,
    };
    this.todos.push(todo);
    this.ui.render(this.todos);
    this.ui.storage(this.todos);
  }

  remove(index) {
    this.todos.splice(index, 1);
    this.ui.render(this.todos);
    this.ui.storage(this.todos);
  }

  clearAll() {
    this.todos = this.todos.filter((todo) => todo.completed === false);
    this.ui.render(this.todos);
    this.ui.storage(this.todos);
  }

  edit(index, description) {
    this.todos[index].description = description;
    this.ui.storage(this.todos);
  }

  checkedComplete(index) {
    this.todos[index].completed = !this.todos[index].completed;
    this.ui.render(this.todos);
    this.ui.storage(this.todos);
  }

  init() {
    this.ui.inputs(this);
    this.ui.render(this.todos);
    this.ui.clearAll(this);
    this.ui.editTodo(this);
  }

  // event delegation
  eventDelegation() {
    this.ulElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('trash')) {
        this.remove(e.target.parentElement.parentElement.parentElement.id);
      }
      if (e.target.classList.contains('checkbox')) {
        this.checkedComplete(
          e.target.parentElement.parentElement.parentElement.id,
        );
      }
    });
  }

  // edit todo
  editTodo() {
    this.ulElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('list')) {
        e.target.contentEditable = true;
        e.target.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.target.contentEditable = false;
            this.edit(e.target.parentElement.id, e.target.innerText);
          }
        });
      }
    });
  }

  // clear all completed file
  clearAll() {
    this.btnClear.addEventListener('click', () => {
      this.clearAll();
    });
  }

  // add todo
  inputs() {
    this.todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.add(e.target.value);
        e.target.value = '';
      }
    });
  }

  // storage
  storage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // render
  render() {
    this.ulElement.innerHTML = '';
    this.todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.id = index;
      li.innerHTML = `
            <div class='list-item'>
            <input type='checkbox' class='checkbox' ${
  todo.completed ? 'checked' : ''
}>
            <p class='list ${todo.completed ? 'completed' : ''}'>${
  todo.description
}</p>
            <i class='fas fa-trash-alt trash'></i>
            </div>
            `;
      this.ulElement.appendChild(li);
    });
  }

  // remove element
  removeElement(target) {
    if (target.classList.contains('trash')) {
      target.parentElement.parentElement.parentElement.remove();
    }
  }

  // checked complete
  checkedComplete(target) {
    if (target.classList.contains('checkbox')) {
      target.parentElement.parentElement.parentElement.classList.toggle(
        'completed',
      );
    }
  }
}
