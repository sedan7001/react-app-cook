import ax from 'axios';

const axios = ax.create({
    baseURL: 'http://sedan.ipdisk.co.kr/cook/api'
});

export const write = (pageName, content) => axios.get(`/${pageName}/posts`, {content});
export const list = (page, pageName) => axios.get(`/${pageName}s?page=${page}`);
export const view = (num, pageName) => axios.get(`/${pageName}s/${num}`);

export const next = (url) => axios.get(url);
export const like = (postId) => axios.post(`/api/posts/${postId}/likes`);
export const unlike = (postId) => axios.delete(`/api/posts/${postId}/likes`);
export const comment = ({postId, text}) => axios.post(`/api/posts/${postId}/comments`, {text});

// import ax from 'axios';
//
// const SERVICE_URI = process.env.SERVICE_URI;
// const axios = ax.create({
//     baseURL: SERVICE_URI,
//     withCredentials: true,
// });
// const queryString = (params) => new URLSearchParams(params).toString();
//
// const getUsers = (params = {}) =>
//     axios.get('/users', {params: params}).then(fetchHandler);
//
// axios 는 기본옵션을 설정하여 인스턴스를 생성 할수 있다.
// ax.create 를 통해 기본URL 과 credentials 를 지정해 주었다.
// 또한 axios 의 옵션 프로퍼티중에 params 의 벨류로 객체를 넘기게 되면
// 키벨류 쌍으로 쿼리스트링을 생성해 준다.
// axios 의 옵션 프로퍼티에도 method 가 있지만,
// axios 의 메서드명을 이용한 방식이 더 명시적이다
