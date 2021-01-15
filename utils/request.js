/**
 * 基于 axios封装的请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/',
})

request.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // 请求就会经过这里
    console.log(456)
    const { user } = store.state

    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }

    // 返回 config 请求配置对象
    return config
  },
  function(error) {
    // 如果请求失败(此时请求还没有发出去)就会进入这里
    // Do something with request error
    return Promise.reject(error)
  }
)

export default request
