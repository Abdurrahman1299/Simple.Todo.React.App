import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Flex } from "@chakra-ui/react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Lorem ipsum dolor sit amet" },
    { id: 2, text: "Consectetur adipiscing elit" },
    { id: 3, text: "Sed do eiusmod tempor incididunt" },
    { id: 4, text: "Ut labore et dolore magna aliqua" },
    { id: 5, text: "Ut enim ad minim veniam" },
  ]);

  function handleAddTodo(newTodo) {
    setTodos([newTodo, ...todos]);
  }

  function handleDeleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleUpdateTodos(updatedTodo) {
    setTodos([
      updatedTodo,
      ...todos.filter((todo) => todo.id !== updatedTodo.id),
    ]);
  }

  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={"#444"}
    >
      <h1 style={{ color: "#fff", padding: "40px" }}>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onChangeTodo={handleUpdateTodos}
      />
    </Flex>
  );
}
