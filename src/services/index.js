import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const GET_TODOS = async () => {
	try {
		const res = await axios.get(BASE_URL);
		return res.data;
	} catch (err) {
		console.log('get_todos err: ', err.message);
	}
};

export const ADD_TODO = async (title) => {
	try {
		const res = await axios.post(BASE_URL, {
			title: title,
			body: '',
			userId: 1,
		});
		return res.data;
	} catch (err) {
		console.log('add todo err: ', err.message);
	}
};

export const EDIT_TODO = async (id, title) => {
	try {
		const res = await axios.put(`${BASE_URL}/${id}`, {
			title: title,
			body: '',
			userId: 1,
		});
		return res.data;
	} catch (err) {
		console.log('edit todo error: ', err.message);
	}
};

export const DELETE_TODO = async (id) => {
	try {
		const res = await axios.delete(`${BASE_URL}/${id}`);
		return res.status;
	} catch (err) {
		console.log('delete todo error: ', err.message);
	}
};
