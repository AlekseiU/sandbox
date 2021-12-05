import axios from 'axios';

export const baseURL = '/api';

export const request = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});
