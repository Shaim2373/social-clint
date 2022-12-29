import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createChat = (data) => API.post( data);

export const userChats = (id) => API.get({id});

export const findChat = (firstId, secondId) => API.get(`${firstId}/${secondId}`);