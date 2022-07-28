import React, { useState } from 'react';
import './index.css';
const AddTodo = ({ addNewTodo }) => {
	const [value, setValue] = useState('');

	const submit = (e) => {
		e.preventDefault();
		addNewTodo(value);
		setValue('');
	};

	return (
		<div className='addtodo'>
			<form className='form' onSubmit={submit}>
				<input
					className='input'
					type='text'
					value={value}
					required={true}
					onChange={(e) => setValue(e.target.value)}
				/>
				<input className='button' type='submit' value='Add' />
			</form>
		</div>
	);
};

export default AddTodo;
