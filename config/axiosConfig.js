const axios = require('axios');
const iterableKey = process.env.ITERABLE_API_KEY;

axios.interceptors.request.use((config) => {
    config.headers['Api-Key'] = iterableKey;
    return config
})

module.exports = axios;