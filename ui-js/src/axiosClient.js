var axios = require('axios');

var axiosClient = axios.create({
  // baseURL: 'https://ec2-18-191-142-47.us-east-2.compute.amazonaws.com'
  baseURL: 'https://daml-covid19.vcredserver.com/'
});

module.exports = axiosClient;