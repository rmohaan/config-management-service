import axios from 'axios';
import { store } from '../store';
import { logout } from '../store/authSlice';

const api = axios.create({
    baseURL: 'https://dummyjson.com/c/bc9a-0a05-471a-ba77', // Replace with your API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor for JWT token
api.interceptors.request.use(config => {
    const token = store.getState().auth.token;
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

// Response Interceptor to handle 401 (Unauthorized)
api.interceptors.response.use(response => response, error => {
    if (error.response?.status === 401) {
        store.dispatch(logout()); // Logout if 401 error (unauthorized)
    }
    return Promise.reject(error);
});

export default api;
