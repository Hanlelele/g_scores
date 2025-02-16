import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const customAxios = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

customAxios.defaults.withCredentials = true;

customAxios.interceptors.request.use(
    function (config) {
        // Add Authorization header with Bearer token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default customAxios;
