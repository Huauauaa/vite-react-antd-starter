import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
  timeout: 60e3,
});

http.interceptors.response.use(
  result => {
    const { data } = result;
    return data;
  },
  data => {
    const { response } = data;
    return Promise.reject(response.data);
  },
);

export default http;
