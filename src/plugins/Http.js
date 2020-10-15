import axios from 'axios';
import url from './url.js';

let Http = axios.create({
    baseURL: url.api,
});

// // 添加一个请求拦截器
Http.interceptors.request.use(function (conf) {
    conf.headers.Authorization = localStorage.jwt;
    return conf;
}, function (error) {
    return Promise.reject(error);
});

// // 添加一个响应拦截器
Http.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.error('接口错误');
    console.error(error);
    if (error.response.status == 401) {
        // 未登录
        localStorage.href = window.location.href
        window.location.replace(window.location.origin + '/login');
    }
    // return Promise.reject(error);
});


export default Http;