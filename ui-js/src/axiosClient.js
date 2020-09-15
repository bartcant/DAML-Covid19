var axios = require('axios');

var axiosClient = axios.create({
    // localhost
    baseURL: 'http://localhost:3002/',
    // AWS Node.JS server
    // baseURL: 'https://daml-covid19.vcredserver.com/',
});


module.exports = axiosClient;