import TodoList from "./addandremove.js";

describe("TodoList", () => {
  const ui = {
    render: jest.fn(),
    storage: jest.fn(),
    inputs: jest.fn(),
    clearAll: jest.fn(),
    editTodo: jest.fn(),
  };
  const todoList = new TodoList(ui);
  const todo = {
    description: "test",
    completed: false,
  };
  const index = 0;

  it("should add a todo", () => {
    todoList.add(todo.description);
    expect(todoList.todos).toEqual([todo]);
  });

  it("should remove a todo", () => {
    todoList.remove(index);
    expect(todoList.todos).toEqual([]);
  });

  //   clear todo when checked
  it("should clear completed todo", () => {
    todoList.todos = [];
    todoList.clearAll();
    expect(todoList.todos).toEqual([]);
  });

  it("should edit a todo", () => {
    todoList.todos = [todo];
    todoList.edit(index, "test2");
    expect(todoList.todos).toEqual([
      { description: "test2", completed: false },
    ]);
  });

  it("should update item's completed status", () => {
    todoList.todos = [todo];
    todoList.checkedComplete(index);
    expect(todoList.todos).toEqual([
      { description: "test2", completed: false },
    ]);
  });
});
