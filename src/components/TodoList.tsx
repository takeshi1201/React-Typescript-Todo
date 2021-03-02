import React from "react";

import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { items, onDeleteTodo, onCompleteTodo } = props;
  return (
    <div className="newTodo">
      <p className="newTodo-head">未完了Todo</p>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button className="btn-complete" onClick={onCompleteTodo.bind(null, todo.id)}>完了</button>
            <button className="btn-delete" onClick={onDeleteTodo.bind(null, todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
