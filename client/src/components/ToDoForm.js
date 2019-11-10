/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        saveTodo(value);
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={e => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
