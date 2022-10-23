import axios from 'axios';
// import {envConfig} from '../config/env'
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken, logout } from './auth';
import { message } from 'antd';
import store from '../store';
import { loadingAction } from '../store/actions/useActions';

// jnpf 后台接口数据
export interface IResult<T> {
  code: number;
  data: T;
  desc: string;
}

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:3003', // url = base url + request url
  // timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    store.dispatch(loadingAction(true))
    const token = getToken();
    if (token) {
      config.headers!.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// response interceptor 拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    store.dispatch(loadingAction(false))
    // console.log(response)
    // let data = response.data;
    // blob
    // if (response.config.responseType === 'blob') {
    //   return blobData(response);
    // }
    // application/json
    // if (data.code !== 0 && data.code !== 200) {
    //   const msg = data.desc || data.msg || 'Error';
    //   message.warning(msg);

    //   // jnpf 600
    //   if (data.code === 600 || data.code === 401 || data.code === 400) {
    //     logout();
    //     return Promise.reject(new Error(msg));
    //   }

    //   return Promise.reject(new Error(msg));
    // } else {
    //   return Promise.resolve(response);
    // }
    return Promise.resolve(response);
  },
  (error: any) => {
    store.dispatch(loadingAction(false))
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;

/*
  拦截下载接口：
   1. 通过判断content-type判断返回数据，如果是json，解析提示信息
   2. 否则直接返回response
*/
function blobData(response: AxiosResponse<Blob>) {
  const contentType = response.headers['content-type'] || '';
  const res = response.data;

  if (contentType.includes('application/json')) {
    var r = new FileReader();
    r.readAsText(res, 'utf-8');

    return new Promise((resolve, reject) => {
      r.onload = () => {
        try {
          const data = JSON.parse(r.result as string);

          if (data && data.code !== 0 && data.code !== 200) {
            const msg = data.desc || data.msg || 'Error';
            message.warning(msg);

            // jnpf 600
            if (data.code === 600 || data.code === 401) {
              logout();
              reject(new Error(msg));
            }

            reject(new Error(msg));
          } else {
            response.data = data;
            resolve(response);
          }
        } catch (error) {
          reject(error);
        }
      };
    });
  } else {
    return Promise.resolve(response);
  }
}
