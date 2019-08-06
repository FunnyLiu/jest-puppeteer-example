import React from "react";
import { useTodos } from "../TodosProvider.jsx";
const ToggleAll = props => {
  const [todos, dispatch] = useTodos();
  const isToggled = todos.every(({ completed }) => completed);



  const onChange = ({ target: { checked } }) => {
    dispatch({ type: "toggle-all", checked });
  };

  
  return (
    <React.Fragment>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isToggled}
        onChange={onChange}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </React.Fragment>
  );
};

export default ToggleAll