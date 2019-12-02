import axios from 'axios'
import qs from 'qs'
// let service = axios.create({
//   baseURL: process.env.NODE_ENV == 'development' ? '/api' : '',
//   timeout: 10000 // 请求超时时间
// })
axios.prototype.baseURL = process.env.NODE_ENV == 'development' ? '/api' : '';
axios.prototype.timeout = 10000
console.log(axios.prototype.baseURL);
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'post') {
    config.data = qs.stringify({
      ...config.data
    })
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
*/
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
* 封装post请求
* @param url
* @param data
* @returns {Promise}
*/
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response.data);
    })
      .catch(err => {
        reject(err)
      })
  })
}