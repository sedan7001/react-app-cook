import ax from "axios/index";
// import api from 'services/api'

import { apiUrl } from 'config';
const axios = ax.create({
    baseURL: apiUrl

});

export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('/api/auth/exists/username/' + username);

export const localRegister = ({email, username, password}) => axios.post('/api/auth/register/local', { email, username, password });
export const localLogin = ({id, password}) => axios.post('/signin', { id, password });
// export const localLogin = ({id, password}) => api.post('/signin', { id, password });


export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
