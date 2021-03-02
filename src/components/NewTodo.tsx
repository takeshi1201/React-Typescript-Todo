import React, {useRef, useState} from "react";

import './NewTodo.css';

interface NewTodoProps  {
  onAddHandler: (todoText: string) => void;
  items: { id: string; text: string }[];
}

const NewTodo:React.FC<NewTodoProps> = props => {
  const { onAddHandler , items} = props;
  // const [todo, setTodos] = useState(items);

  const textInputRef =  useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if(enteredText !== "") {
      onAddHandler(enteredText);
      textInputRef.current!.value = '';
    } else {
      alert('Todoの入力してください');
    }
  }

  const Limit = items.length >= 5;
   
  return <form onSubmit={todoSubmitHandler}>
    <div className="form-control">
      <label htmlFor="todo-text">Todo内容</label>
      <input type="text" name="" id="todo-text" ref={textInputRef} disabled={Limit}/>
    </div>
    <button type="submit" disabled={Limit} >TODO追加</button>
  </form>
}

export default NewTodo;
