import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

// function App() {
//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodo => prevTodo.filter(todo => todo.id !== todoId));
  }

  return (
    <div className="App">
      <NewTodo onAddHandler={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};
export default App;
