import React, { useState } from "react";
import { useTodos } from "../TodosProvider.jsx";

const NewTodo = () => {
  const [todos, dispatch] = useTodos();
  const [text, setText] = useState("");

  const onChange = ({ target: { value } }) => {
    setText(value);
  };

  const onKeyDown = event => {
    const { keyCode } = event;
    if (keyCode !== 13) {
      return;
    }
    event.preventDefault();
    const newText = text.trim();

    if (newText !== "") {
      dispatch({ type: "add", text: newText });
      setText("");
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={text}
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoFocus
    />
  );
};

export default NewTodo;
