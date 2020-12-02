const dotenv = require('dotenv');

dotenv.config();

const { api, cpu, logger } = require('./utils');
const { POLLING_INTERVAL, paths } = require('./constants');

setInterval(async () => {
  try {
    const info = await cpu.get();

    api.put(paths.cpu, { ...info });
  } catch (error) {
    logger(error);
  }
}, POLLING_INTERVAL);
