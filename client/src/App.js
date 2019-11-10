/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoState from "./hooks/useTodoState";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="app">
      <Typography component="h1" variant="h2">
        Todos Using React Hooks!
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
