import ax from "axios/index";
import { apiUrl } from 'config';
const axios = ax.create({
    // baseURL: 'http://sedan.ipdisk.co.kr/cook/api'
    baseURL: apiUrl

});

export const surveyView = () => axios.get('/survey');

