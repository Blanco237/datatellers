import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:5500'
});

export const loginUser = async (user) => {
    const res = await Axios.post('/users/login', user );
    return res.data;
}

