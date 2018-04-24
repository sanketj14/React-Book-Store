import axios from 'axios';
import * as constants from '../constants';
import NProgress from 'nprogress';

export const book_store_axios_instance = axios.create({
  baseURL: constants.BOOKS_API,
  headers: {'Content-Type': 'application/json'}
});

// request interceptor
book_store_axios_instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start();  
  return config;
}, function (error) {
  NProgress.done();  
  // Do something with request error
  return Promise.reject(error);
});

// response interceptor
book_store_axios_instance.interceptors.response.use(function(response) {
  NProgress.done();
  return response;
}, function(error) {
  NProgress.done()
  return Promise.reject(error);
})
