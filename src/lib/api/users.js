import ax from "axios/index";
const axios = ax.create({
    baseURL: 'http://sedan.ipdisk.co.kr/cook/api'
    // baseURL: 'http://192.168.0.147/cook/api/'

});
export const getUserInfo = (username) => axios.get(`/api/users/${username}`);
