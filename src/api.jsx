import axios from 'axios';


const API_URL = 'http://52.3.234.203:8080';

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
}


export const register = async (name, email, password, isTeacher) => {
    const response = await axios.post(`${API_URL}/auth/register`, { name, email, password, isTeacher });
    return response.data;
}

export const listCourses = async (token) => {
    const response = await axios.get(`${API_URL}/course`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};


