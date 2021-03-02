import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: text },
    ]);
  };


  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddHandler={todoAddHandler} items={todos} />
      {todos.length >= 5 && (
        <p style={{ color: "red" ,textAlign: 'center'}}>
          登録できるTodoは2個まです。消化してください
        </p>
      )}
      <TodoList
        items={todos}
        onDeleteTodo={todoDeleteHandler}
      />
    </div>
  );
};
export default App;
