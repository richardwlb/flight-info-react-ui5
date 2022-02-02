import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.aviationstack.com/v1',
});

export default api;