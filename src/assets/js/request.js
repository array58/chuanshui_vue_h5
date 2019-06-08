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

}

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(responseInterceptor)

export default instance;