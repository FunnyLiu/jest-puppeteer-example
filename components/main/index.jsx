import React from 'react'
import { useTodos } from "../TodosProvider.jsx";
import ToggleAll from './ToggleAll.jsx';
import TodoList from './TodoList.jsx';

const Main = props => {
  const [todos] = useTodos();
  const noTodosClass = todos.length === 0 ? "hidden" : "";

  return <section className={`main ${noTodosClass}`}>
     <ToggleAll />
     <TodoList /> 
  </section>;
};

export  default Main