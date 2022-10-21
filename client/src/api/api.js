import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:5500',
    headers: {
        token: localStorage.getItem('drH-user-token')
    }
});

export const loginUser = async (user) => {
    const res = await Axios.post('/users/login', user);
    return res.data;
}

/**
 * Gets a User Object from jwt token
 * @param {string} token Token to check
 * @returns User Object
 */
export const getUser = async (token) => {
    const res = await Axios.post('/users/check', {}, {
        headers: {
            token
        }
    });
    return res.data;
}


export const saveRecord = async (data) => {
    const res = await Axios.post('/records/save', data);

    return res.data
}

export const getRecords = async () => {
    const res = await Axios.get('/records/all');
    return res.data;
}

export const getRecord = async (code) => {
    const res = await Axios.get(`/records/byCode/${code}`);
    return res.data;
}

export const updateRecord = async (data) => {
    const res = await Axios.post('/records/update', data);
    return res.data;
}

export const getStatusCount = async (status) => {
    const res = await Axios.get(`/records/status/${status}`);
    return res.data;
}