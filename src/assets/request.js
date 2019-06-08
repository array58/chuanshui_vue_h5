const axios = require('axios');
const qs = require('qs');
const env = process.env.NODE_ENV;
const instance = axios.create({});
export default instance;