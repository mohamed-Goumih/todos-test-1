import { useEffect } from "react";
import { useState } from "react";

import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
function App() {
  const [todos, setTodos] = useState([]);

  //fetcher les todos
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
    console.log(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  //Ajouter un todo

  const onAdd = async (title) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, completed: false }),
    });
    if (response.ok) {
      const addedTodo = await response.json();
      setTodos([...todos, addedTodo]);
    }
  };

  return (
    <>
      <h1>partie Front End Todos</h1>
      <AddTodoForm onAdd={onAdd} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
