// import api from '@/api/http';
import { apiInstance } from './index.js';

const api = apiInstance();

async function login(user, success, fail) {
  await api.post('/user/login', JSON.stringify(user)).then(success).catch(fail);
}

async function findById(id, success, fail) {
  api.defaults.headers['access-token'] = sessionStorage.getItem('access-token');
  await api.get(`/user/info/${id}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  console.log('토큰 리제너레이션');
  console.log(user);
  api.defaults.headers['refresh-token'] = sessionStorage.getItem('refresh-token'); //axios header에 refresh-token 셋팅
  await api.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(id, success, fail) {
  await api.get(`/user/logout/${id}`).then(success).catch(fail);
}

export { login, findById, tokenRegeneration, logout };
