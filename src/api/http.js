import axios from 'axios';

const http = axios.create({
  // baseURL: 'http://54.180.12.116/',
  baseURL: 'http://localhost/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: sessionStorage.getItem('access-token'),
  },
});

http.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행할 작업
    config.headers.Authorization = sessionStorage.getItem('access-token');
    return config;
  },
  function (error) {
    // 오류 요청 가공
    return Promise.reject(error);
  }
);

export default http;
