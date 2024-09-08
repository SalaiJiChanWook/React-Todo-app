import TodoItem from "./TodoItem";
import Form from "./Form";
import { useState } from "react";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  // const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setTodos([...todos, todo]);
  //   console.log(todos);
  // }

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         onChange={(e) => setTodo(e.target.value)}
  //         value={todo}
  //         type="text"
  //       />
  //       <button type="submit">Add</button>
  //     </form>
  //     {todos.map((item) => (
  //       <TodoItem key={item} item={item} />
  //     ))}
  //   </div>
  // );
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      {/* <h1>{completedTodos}</h1> */}
    </div>
  );
}
