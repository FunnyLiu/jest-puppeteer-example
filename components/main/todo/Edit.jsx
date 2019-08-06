import React from 'react'
import {useTodos} from '../../TodosProvider.jsx'

export const Edit=(props)=> {

	const { isEditing, id, text, setEditing } = props;
	const [todos, dispatch] = useTodos();
	const inputEl = React.useRef(null);
	const [editText, setEditText] = React.useState(text);

	function onChange({ target: { value } }) {
		setEditText(value);
	}

	function onSubmit({ target: { value: text } }) {
		if (text.trim() !== '') {
			dispatch({ type: 'edit', id, text });
		} else {
			dispatch({ type: 'destroy', id });
		}
	}

	function onKeyDown(event) {
		const { keyCode } = event;

		if (keyCode === 13) {
			onSubmit(event);
		}

		if (keyCode === 27) {
			setEditText(text);
		}

		if ([13, 27].includes(keyCode)) {
			setEditing(null);
		}
	}

	React.useEffect(() => {
		if (isEditing) {
			inputEl.current.focus();
		}
	});

	return (
		<input
			className="edit"
			ref={inputEl}
			value={editText}
			onChange={onChange}
			onBlur={onSubmit}
			onKeyDown={onKeyDown}
		/>
	);
}