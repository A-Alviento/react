import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; // useDispatch hook allows us to dispatch actions
import { addTodo } from '../redux/todoSlice'; // import the addTodo action

const AddTodoForm = () => { // AddTodoForm component
	const [value, setValue] = useState('');
	const dispatch = useDispatch(); // useDispatch hook allows us to dispatch actions

	// onSubmit is an event handler that dispatches the addTodo action when the form is submitted
	const onSubmit = (event) => {
		event.preventDefault(); // prevent the default form submit behavior which refreshes the page

		// if the value is not empty, dispatch the addTodo action with the value as the payload
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;