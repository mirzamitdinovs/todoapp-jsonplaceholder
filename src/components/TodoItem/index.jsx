import React, { useState } from 'react';
import EditTodo from '../EditTodo';
import './index.css';

const TodoItem = ({ item, toggleTodo, deleteTodo, editTodo }) => {
	const [isEdit, setIsEdit] = useState(false);

	return (
		<div>
			{isEdit ? (
				<EditTodo
					item={item}
					cancel={() => setIsEdit(false)}
					editTodo={editTodo}
				/>
			) : (
				<div className='todoitem'>
					<input
						onClick={() => toggleTodo(item.id)}
						type='checkbox'
						checked={item.completed}
					/>
					<h4
						style={{
							textDecoration: item.completed ? 'line-through' : 'none',
						}}
					>
						{item.title}
					</h4>
					<div>
						<button
							className='todoitem__button edit'
							onClick={() => setIsEdit(true)}
						>
							Edit
						</button>
						<button
							className='todoitem__button delete'
							onClick={() => deleteTodo(item.id)}
						>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TodoItem;
