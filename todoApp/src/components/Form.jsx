import { useState } from "react";
import myCss from "./form.module.css";
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    console.log(todos);
  }

  return (
    <form className={myCss.todoform} onSubmit={handleSubmit}>
      <div className={myCss.inputContainer}>
        <input
          className={myCss.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="လုပ်ငန်း၊တာဝန်များကိုရေးရန်"
        />
        <button className={myCss.modernButton} type="submit">
          ထည့်မည်။
        </button>
      </div>
    </form>
  );
}
