import "./style.css";
import { TodoList } from "./modules/addandremove.js";

inputs();
render(todos);
clearAll();
editTodo(document);

// event delegation
document.addEventListener("click", (e) => {
  removeElement(e.target);
  checkedComplete(e.target);
});
