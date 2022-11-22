import axios from 'axios';

// local vue api axios instance
function apiInstance() {
  const instance = axios.create({
    baseURL: 'http://localhost/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return instance;
}

export { apiInstance };
