const { Toast } = require('vant');
const { loginToast } = require('./hybrid')
const axios = require('axios');
const qs = require('qs');
const env = process.env.NODE_ENV;
const instance = axios.create({});
const requestInterceptor = config =>{
    config.headers['Content-Type'] = config.headers['Content-Type'] ? config.headers['Content-Type'] : 'application/json';
    console.log(config.headers)
    console.log(config.headers['Content-Type'])
    return config;

}
const responseInterceptor = res =>{
    const data = res.data;
    if(data.code != 100){
        if(data.code == 1008 || data.code == 1001 ){
            loginToast()
        }else{
            Toast.fail(data.message);
        }
        return Promise.reject(data)
    }else{
        return data;
    }
}

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(responseInterceptor)

export default instance;