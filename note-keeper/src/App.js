import './App.css';
import React, { useState } from "react";
import "./App";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>React - To Do App </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
