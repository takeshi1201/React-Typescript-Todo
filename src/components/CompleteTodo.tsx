import React from "react";

import "./TodoList.css";

interface TodoCompleted {
  items: { id: string; text: string }[];
}

const CompleteTodo: React.FC<TodoCompleted> = props => {
  const { items } = props;
  console.log(items);

  return (
    <div className="complate">
      <p className="complate-head">完了Todo</p>
      <ul>
        {
        items.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              {/* <button onClick={onDeleteTodo.bind(null, todo.id)}>削除</button> */}
            </li>
            ))
        }
      </ul>
    </div>
  );
};

export default CompleteTodo;
