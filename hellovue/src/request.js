import axios from 'axios'
import { Notify } from 'vant';
 // 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 15000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
    config.headers.Authorization = 'xuerenfei'
    return config
}, error => {
    Promise.reject(error)
})
service.interceptors.response.use(
    response => {
        if(response.status == 200) {
            Notify({ type: 'success', message: response.data.ret[0].split('::')[1] });
        }
        //请求正常则返回
        return Promise.resolve(response)
    },
    error => {
        return Promise.reject(error)
    }
  )

  export default service