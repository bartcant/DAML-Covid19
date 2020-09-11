var axios = require('axios');

var axiosClient = axios.create({
  baseURL: 'http://localhost:3002/'
});

// AWS Node.JS server
// var axiosClient = axios.create({
//  baseURL: 'https://daml-covid19.vcredserver.com/'
//});


module.exports = axiosClient;