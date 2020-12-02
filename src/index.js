const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const { cpu, logger } = require('./utils');
const { POLLING_INTERVAL, API_BASE, paths } = require('./constants');

const instance = axios.create({ baseURL: API_BASE });

setInterval(async () => {
  try {
    const info = await cpu.get();

    instance.put(paths.cpu, { ...info });
  } catch (error) {
    logger(error);
  }
}, POLLING_INTERVAL);
