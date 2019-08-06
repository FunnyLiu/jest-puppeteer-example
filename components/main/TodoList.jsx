import React, { useState } from "react";
import { useTodos } from "../TodosProvider.jsx";
import { useFilter } from "../FilterProvider.jsx";
import Todo from "./todo/index.jsx";

const TodoList = props => {
  const [editing, setEditing] = useState(null);
  const [filter] = useFilter();
  const [todos] = useTodos();
  let visibleTodos = todos;

  if (filter === "active") {
    visibleTodos = todos.filter(({ completed }) => completed === false);
  }

  if (filter === "completed") {
    visibleTodos = todos.filter(({ completed }) => completed);
  }

  visibleTodos = visibleTodos.map(({ id, text, completed }) => {
    const isEditing = id === editing;

    return (
      <Todo
        key={id}
        id={id}
        text={text}
        isEditing={isEditing}
        setEditing={setEditing}
        completed={completed}
      />
    );
  });

  return <ul className="todo-list">{visibleTodos}</ul>;
};

export default TodoList;
