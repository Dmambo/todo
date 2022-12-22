import TodoList from "./addandremove";

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
});
