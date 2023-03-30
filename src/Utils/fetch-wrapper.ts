import {ApiUrl} from '../const';

export const fetchWrapper = {
	get,
	post,
	put,
	delete: _delete,
};

async function get(url: string) {
	const requestOptions: RequestInit = {
		method: 'GET',
	};
	return await fetch(url, requestOptions);
}

async function post(url: string, body: object) {
	const requestOptions: RequestInit = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(body),
	};
	return await fetch(url, requestOptions);
}

async function put(url: string, body: object) {
	const requestOptions: RequestInit = {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(body),
	};
	return await fetch(url, requestOptions);
}

async function _delete(url: string) {
	const requestOptions: RequestInit = {
		method: 'DELETE',
	};

	return await fetch(url, requestOptions);
}
