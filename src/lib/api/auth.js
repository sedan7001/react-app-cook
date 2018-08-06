import ax from "axios/index";
const axios = ax.create({
    baseURL: 'http://sedan.ipdisk.co.kr/cook/api'
    // baseURL: 'http://192.168.0.147/cook/api/'

});
// import api from 'services/api'

export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('/api/auth/exists/username/' + username);

export const localRegister = ({email, username, password}) => axios.post('/api/auth/register/local', { email, username, password });
export const localLogin = ({id, password}) => axios.post('http://192.168.0.147/cook/api/signin', { id, password });



// export const localLogin = ({id, password}) => api.post('/signin', { id, password });


export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
