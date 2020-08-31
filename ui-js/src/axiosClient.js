var axios = require('axios');

var axiosClient = axios.create({
  baseURL: 'https://daml-covid19.vcredserver.com/'
});

module.exports = axiosClient;