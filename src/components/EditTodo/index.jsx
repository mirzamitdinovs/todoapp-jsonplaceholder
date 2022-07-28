import React, { useState } from 'react';

const EditTodo = ({ item, cancel, editTodo }) => {
	const [editValue, setEditValue] = useState(item);

	const submit = (e) => {
		e.preventDefault();
		editTodo(editValue);
		cancel();
	};

	return (
		<div className='addtodo'>
			<form className='form' onSubmit={submit}>
				<input
					className='input'
					value={editValue.title}
					onChange={(e) =>
						setEditValue({
							...editValue,
							title: e.target.value,
						})
					}
					type='text'
					required={true}
				/>
				<input className='todoitem__button edit ' type='submit' value='Save' />
				<input
					onClick={() => cancel()}
					className='todoitem__button delete'
					type='submit'
					value='Cancel'
				/>
			</form>
		</div>
	);
};

export default EditTodo;
