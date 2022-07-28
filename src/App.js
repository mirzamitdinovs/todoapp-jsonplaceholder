import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS } from './services';
function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		const res = await GET_TODOS();
		const updated = res.map((item) => ({
			id: item.id,
			title: item.title,
			completed: false,
		}));
		setTodos(updated);
	};

	const addNewTodo = async (text) => {
		const res = await ADD_TODO(text);
		if (res) {
			if (res) {
				const newTodo = {
					id: `${Math.floor(Math.random() * 10)}${Math.floor(
						Math.random() * 10
					)}${Math.floor(Math.random() * 10)}`,
					title: res.title,
					completed: false,
				};
				setTodos([newTodo, ...todos]);
			}
		}
	};

	const editTodo = async (todo) => {
		if (todo.id > 100) {
			const updatedTodos = todos.map((item) =>
				item.id === todo.id ? todo : item
			);
			setTodos(updatedTodos);
		} else {
			const res = await EDIT_TODO(todo.id, todo.title);
			if (res) {
				const updatedTodos = todos.map((item) =>
					item.id === res.id
						? {
								id: res.id,
								title: res.title,
								completed: todo.completed,
						  }
						: item
				);
				setTodos(updatedTodos);
			}
		}
	};

	const toggleTodo = (todoId) => {
		const updatedTodos = todos.map((item) =>
			item.id === todoId ? { ...item, completed: !item.completed } : item
		);
		setTodos(updatedTodos);
	};

	const deleteTodo = async (todoId) => {
		const res = await DELETE_TODO(todoId);
		if (res === 200) {
			const updatedTodos = todos.filter((item) => item.id !== todoId);
			setTodos(updatedTodos);
		}
	};

	return (
		<div className='container'>
			<h1>Todo App</h1>
			<div>
				<AddTodo addNewTodo={addNewTodo} />
				<TodoList
					todos={todos}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
			</div>
		</div>
	);
}

export default App;
