import React from "react";

import "./TodoList.css";

interface TodoCompleted {
  items: { id: string; text: string }[];
  onBackTodo: (id: string, text: string) => void;
}

const CompleteTodo: React.FC<TodoCompleted> = (props) => {
  const { items, onBackTodo } = props;

  return (
    <div className="complate">
      <p className="complate-head">完了Todo</p>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={onBackTodo.bind(null, todo.id, todo.text)}>
              戻す
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompleteTodo;
