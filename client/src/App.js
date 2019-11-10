/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm saveTodo={console.warn} />
    </div>
  );
};

export default App;
