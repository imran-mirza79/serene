import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
});

export const createRoom = (roomDetails) => API.post('/room/createRoom', roomDetails);