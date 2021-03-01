import React, { useRef} from "react";

import './NewTodo.css';

interface NewTodoProps  {
  onAddHandler: (todoText: string) => void;
}

const NewTodo:React.FC<NewTodoProps> = props => {
  const { onAddHandler } = props;
  const textInputRef =  useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if(enteredText !== "") {
      onAddHandler(enteredText);
      textInputRef.current!.value = '';
    } else {
      alert('入力してください');
    }
  }

  return <form onSubmit={todoSubmitHandler}>
    <div className="form-control">
      <label htmlFor="todo-text">Todo内容</label>
      <input type="text" name="" id="todo-text" ref={ textInputRef} />
    </div>
    <button type="submit">TODO追加</button>
  </form>
}

export default NewTodo;
