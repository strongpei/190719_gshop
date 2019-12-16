/*
  对axios 进行二次封装
  1. 统一处理请求异常
  2. 异步请求成功的数据不是response, 而是response.data
  3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
  4. 配置请求超时的时间
  5. 通过请求头携带token数据
  6. 请求loading
*/

import axios from 'axios'
import qs from 'qs'
import { Indicator } from "mint-ui"

const instance = axios.create({
  baseURL:'/api',
  timeout: 20000 //配置请求超时的时间
})
//添加请求拦截器
instance.interceptors.request.use((config) =>{
  //显示请求loading
  Indicator.open()
  //3.对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
  const data = config.data
  if(data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})
//添加响应拦截器
instance.interceptors.response.use(
  response =>{
    //隐藏请求loading
    Indicator.close()
    return response.data
  },
  error =>{
    alert('请求出错' + error.message)
    return new Promise(() =>{}) //返回一个pending状态的promise =>终端promise链
  }
)
//响应拦截器

  export default instance