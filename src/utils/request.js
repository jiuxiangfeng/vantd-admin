import axios from 'axios'
import router from '../router'
import { TokenTimeoutRefresh, TokenEffective, GetToken } from './token'
import vconfig from '../configs/config'

axios.defaults.baseURL = vconfig.baseURL
// axios.defaults.headers.common[vconfig.Authorization] = 'AUTH_TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 30000

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    config.headers[vconfig.Authorization] = GetToken()
    if (vconfig.refreshToken && vconfig.url !== config.url && TokenTimeoutRefresh()) {
      // 此刻需要刷新token
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  function(error) {
    console.log(error)
    // 对请求错误做些什么
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        router.push({ name: 'Login' })
    }
    return Promise.reject(error)
  }
)

function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
axios.httpGet = (url, params) => {
  if (vconfig.FrontCheckToken && !vconfig.FrontCheckIgnoreUrls.includes(url)) {
    if (TokenEffective()) {
      return get(url, params)
    } else {
      router.push({ name: 'Login' })
    }
  } else {
    return get(url, params)
  }
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
axios.httpPost = (url, params) => {
  if (vconfig.FrontCheckToken && !vconfig.FrontCheckIgnoreUrls.includes(url)) {
    if (TokenEffective()) {
      return post(url, params)
    } else {
      router.push({ name: 'Login' })
    }
  } else {
    return post(url, params)
  }
}

export default axios
