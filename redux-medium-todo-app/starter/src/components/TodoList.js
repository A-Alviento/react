import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux'; // useSelector hook allows us to access the redux store

const TodoList = () => {
	const todos = useSelector((state) => state.todos); // useSelector hook allows us to access the redux store

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
