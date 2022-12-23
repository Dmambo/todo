import TodoList from './todofunction.js';

describe('TodoList', () => {
  const ui = {
    render: jest.fn(),
    storage: jest.fn(),
    inputs: jest.fn(),
    clearAll: jest.fn(),
    editTodo: jest.fn(),
  };
  const todoList = new TodoList(ui);
  const todo = {
    description: 'test',
    completed: false,
  };
  const index = 0;

  it('should add a todo', () => {
    todoList.add(todo.description);
    expect(todoList.todos).toEqual([todo]);
  });

  it('should remove a todo', () => {
    todoList.remove(index);
    expect(todoList.todos).toEqual([]);
  });

  it('should clear completed todo', () => {
    todoList.todos = [];
    todoList.clearAll();
    expect(todoList.todos).toEqual([]);
  });

  it('should edit a todo', () => {
    todoList.todos = [todo];
    todoList.edit(index, todo.description);
    expect(todoList.todos).toEqual([todo]);
  });

  it('should update item completed status', () => {
    todoList.todos = [todo];
    todoList.checkedComplete(index);
    expect(todoList.todos).toEqual([{ ...todo, completed: false }]);
  });
});
