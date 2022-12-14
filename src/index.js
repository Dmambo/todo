import './style.css';

import {
  todos,
  render,
  removeElement,
  checkedComplete,
  clearAll,
  editTodo,
  inputs,
} from './modules/script.js';

inputs();
render(todos);
clearAll();
editTodo(document);

// event delegation
document.addEventListener('click', (e) => {
  removeElement(e.target);
  checkedComplete(e.target);
});
