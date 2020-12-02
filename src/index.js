const dotenv = require('dotenv');

dotenv.config();

const { api, sysinfo, logger } = require('./utils');
const { POLLING_INTERVAL, paths } = require('./constants');

setInterval(async () => {
  try {
    const info = await sysinfo.get();

    api.put(paths.cpu, { ...info });
  } catch (error) {
    logger(error);
  }
}, POLLING_INTERVAL);
