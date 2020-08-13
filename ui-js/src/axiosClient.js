var axios = require('axios');

var axiosClient = axios.create({
  baseURL: 'http://ec2-18-191-142-47.us-east-2.compute.amazonaws.com'
});

module.exports = axiosClient;