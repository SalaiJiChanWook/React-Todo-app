import { useState } from "react";
import ownCSS from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button was Clicked for iteam:", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    // console.log("Iteam text was clicked", name);
    // const newArray = todos.map((todo) =>
    //   todo.name === name ? { ...todo, done: !todo.done } : todo
    // );
    // setTodos(newArray);
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  const className = item.done ? ownCSS.completed : "";
  return (
    <div className={ownCSS.iteam}>
      <div className={ownCSS.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item.name)}
            className={ownCSS.deleteButton}
          >
            ❌
          </button>
        </span>
      </div>
      <hr className={ownCSS.line} />
    </div>
  );
}
