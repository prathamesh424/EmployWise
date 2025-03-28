import axios from 'axios';

const API_URL = import.meta.env.VITE_API_CALL;

const jsonAxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 25000,
    headers: {
        'Content-Type': 'application/json',
    },
});

jsonAxiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

async function signInUser({ password, email }) {
    try {
        const response = await jsonAxiosInstance.post('/api/login', { password, email });
        return response;
    } catch (error) {
        console.error('Error while logging in:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function getUsers(page = 1) {
    try {
        const response = await jsonAxiosInstance.get(`/api/users?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

async function updateUser(userId, userData) {
    try {
        const response = await jsonAxiosInstance.put(`/api/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

async function deleteUser(userId) {
    try {
        const response = await jsonAxiosInstance.delete(`/api/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { signInUser, getUsers, updateUser, deleteUser };
