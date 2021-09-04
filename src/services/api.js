import axios from 'axios';

const api = axios.create ({
    baseURL: "http://localhost:3015",
})

export default api;