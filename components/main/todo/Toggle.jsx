import React from 'react'
import { useTodos } from '../../TodosProvider.jsx'
export const Toggle=(props) =>{

	const { id, completed } = props;
	const [todos, dispatch] = useTodos();

	const onChange = () => dispatch({ type: 'toggle', id });

	return (
		<input
			className="toggle"
			type="checkbox"
			checked={completed}
			onChange={onChange}
		/>
	);
}