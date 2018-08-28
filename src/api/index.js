import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
// import { Message, Loading } from 'element-ui'
import router from '../router'

// 响应时间
// axios.defaults.timeout = 15 * 1000
// 配置cookie
axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 静态资源
// Vue.prototype.$static = ''

// 配置接口地址
axios.defaults.baseURL = '123' //测试服务器地址



var loadingInstance
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    // loadingInstance = Loading.service({
    //   lock: true,
    //   text: '数据加载中，请稍后...',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // })
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data)
    }

    if (token) {
      // config.headers.mp_cookie = token;
    }
    return config
  },
  err => {
    // loadingInstance.close()
    // Message.error('请求错误')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if(res.data.code && res.data.code === '0000'){
      // loadingInstance.close();
      return res;

    }else if(res.data.code && res.data.code === '3010'){//没有权限，弹出提示框
      // loadingInstance.close();
      // Message.error(res.data.content);
      return res
    }else if(res.data.code && res.data.code === '3001'){//未登录，跳登录界面
      // loadingInstance.close();
      // localStorage.removeItem('mp_token');
      // // localStorage.removeItem('menu');
      // localStorage.removeItem('Permissionsmenu');
      // Message.error(res.data.content);
      router.push('/login');
      return res;
    }else if (res.data.code && res.data.code != '0000') {
      // loadingInstance.close();
      // Message.error(res.data.content);
      return res;
    } else {
      // loadingInstance.close()
      // Message.error("系统异常");
      return res;

    }


  },
  err => {
    // loadingInstance.close()
    // Message.error('请求失败，请稍后再试');
    return Promise.reject(err);
  }
)

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// 发送请求
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}
export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
