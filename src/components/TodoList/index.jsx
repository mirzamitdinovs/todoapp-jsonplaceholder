import React from 'react';
import TodoItem from '../TodoItem';
import './index.css';
const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
	return (
		<div className='todolist'>
			{todos.length ? (
				todos.map((item, index) => (
					<TodoItem
						item={item}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
						key={index}
					/>
				))
			) : (
				<h4 className='text'>No todos found</h4>
			)}
		</div>
	);
};

export default TodoList;
