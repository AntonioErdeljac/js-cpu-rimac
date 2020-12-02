const axios = require('axios');

const { API_BASE } = require('../../constants');

const instance = axios.create({ baseURL: API_BASE });

module.exports = instance;
