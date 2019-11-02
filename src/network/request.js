import  axios  from 'axios'

export function  request(config) {
      //1.创建axios实例
      const instance=axios.create({
        baseURL: 'http://106.54.54.237:8000',
        timeout:5000
      })
      //2.axios拦截响应
      instance.interceptors.response.use(res=>{
        return res.data
      },err=>{
        return err
      })
      //3.发送网络请求
  return instance(config)
}

