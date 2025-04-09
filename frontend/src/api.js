import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Ajout du token aux requêtes
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchPosts = () => API.get('/posts');
export const login = (data) => API.post('/auth/login', data);
export const signup = (data) => API.post('/auth/signup', data);
export const fetchUserProfile = () => API.get('/auth/profile');