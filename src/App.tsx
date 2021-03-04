import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
import CompleteTodo from "./components/CompleteTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completeTodo, setCompleteTodo] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoCompletedHandler = (todoId: string, text: string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));

    setCompleteTodo((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };

  const todoBackHandler = (todoId: string, text: string) => {
    setCompleteTodo(prevTodo => prevTodo.filter((todo) => todo.id !== todoId));

    setTodos(prevTodo => [
      ...prevTodo,
      {id: Math.random().toString(), text: text},
    ])
  };

  return (
    <div className="App">
      <NewTodo onAddHandler={todoAddHandler} items={todos} />
      {todos.length >= 5 && (
        <p style={{ color: "red", textAlign: "center" }}>
          登録できるTodoは2個まです。消化してください
        </p>
      )}
      <div className="todo-wrap">
        <TodoList
          items={todos}
          onDeleteTodo={todoDeleteHandler}
          onCompleteTodo={todoCompletedHandler}
        />
        <CompleteTodo items={completeTodo} onBackTodo={todoBackHandler} />
      </div>
    </div>
  );
};
export default App;
