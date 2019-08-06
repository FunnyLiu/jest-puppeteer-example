import React from "react";
import {View} from './View.jsx'
import {Edit} from './Edit.jsx'

const Todo = props => {
  const { id, text, completed, isEditing, setEditing } = props;
  const editingClass = isEditing ? "editing" : "";
  const completedClass = completed ? "completed" : "";

  return (
    <li className={`${editingClass} ${completedClass}`}>
      <View id={id} completed={completed} text={text} setEditing={setEditing} />
      <Edit isEditing={isEditing} id={id} text={text} setEditing={setEditing} />
    </li>
  );
};

export default Todo