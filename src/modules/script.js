const btnClear = document.querySelector('.btn-clear');
const todoList = document.querySelector('.list-items');
const todoInput = document.querySelector('#inputs');
/* eslint-disable import/no-mutable-exports */
let todos = [];

export const storage = (todo) => {
  localStorage.setItem('todos', JSON.stringify(todo));
};

export const render = (todos) => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      li += `<li class='list-item'>
        <label class='lists' id=${id}>
          <input class='checkbox' type='checkbox' id=${id} />
          <p class='list' contenteditable='true'>${todo.description}</p>
        </label>
        <div class='settings'>
              <ion-icon  name='ellipsis-vertical-outline'></ion-icon>
            <ul class='task-menu'>
              <ion-icon name='trash-outline' class='trash'>Delete</ion-icon>
            </ul>
         </div>
         </li>`;
    });
    todoList.innerHTML = li;
  }
};

// checkbox and mark as completed
export const checkedComplete = (target) => {
  if (target.classList.contains('checkbox')) {
    todos[target.parentElement.id].completed = target.checked;
    // add a class of completed
    if (target.checked) {
      target.parentElement.parentElement.classList.add('completed');
    } else {
      target.parentElement.parentElement.classList.remove('completed');
    }

    storage(todos);
  }
};

// remove element
const removeid = (id) => {
  todos = todos.filter((todo) => todo.index !== id);
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].index = i + 1;
  }
  storage(todos);
  render(todos);
};

export const removeElement = (target) => {
  if (target.classList.contains('trash')) {
    // const id = target.parentElement.parentElement.parentElement.id;
    todos.splice(target.parentElement.parentElement.parentElement.id, 1);
    removeid(target.parentElement.parentElement.parentElement.id);
  }
};

// clear all completed file
export const clearAll = () => {
  btnClear.addEventListener('click', () => {
    // clear all method with filter methods
    todos = todos.filter((todo) => todo.completed === false);
    storage(todos);
    render(todos);
  });
};

// edit todo
export const editTodo = (document) => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
      e.target.contentEditable = true;
      e.target.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.target.contentEditable = false;
          todos[e.target.parentElement.id].description = e.target.innerText;
          storage(todos);
        }
      });
    }
  });
};

export const inputs = () => {
  todoInput.addEventListener('keypress', (e) => {
    const todoInfo = todoInput.value.trim();
    if (e.key === 'Enter' && e.target.value !== '') {
      e.preventDefault();

      const todo = {
        description: todoInfo,
        completed: false,
        index: todos.length + 1,
      };
      todos.push(todo);
      storage(todos);
      render(todos);
      e.target.value = '';
    }
  });
};

// update the storage to show when user reloads the page

if (localStorage.getItem('todos')) {
  todos = JSON.parse(localStorage.getItem('todos'));
  render(todos);
} else {
  localStorage.setItem('todos', JSON.stringify([]));
}
export { todos };