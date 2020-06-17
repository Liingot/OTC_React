import axios from "axios";
import { message } from 'antd';
//创建一个axios示例
axios.defaults.headers.post['Content-Type'] = 'application/json';

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(response => {
  const { status } = response;
  const { code, msg } = response.data;
  if (status === 200) {
    if (code === 0) {
      return response;
    }
    else {
      message.error(msg);
      return Promise.reject(msg);
    }
  }
},
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
