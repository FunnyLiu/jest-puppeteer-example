import NewTodo from './NewTodo.jsx'
import React from 'react'
const Header = ()=>{
    return (
        <header className="header">
			<h1>todos</h1>
			<NewTodo />
		</header>
    )
}

export default Header