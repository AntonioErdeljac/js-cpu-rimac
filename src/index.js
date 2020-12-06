require('dotenv').config();

const { addSeconds } = require('date-fns');

const { api, sysinfo } = require('./utils');
const { POLLING_INTERVAL, paths } = require('./constants');

setInterval(async () => {
  try {
    const info = await sysinfo.get();

    api.put(paths.info, { ...info, expiresAt: addSeconds(new Date(), 5) });
  } catch (error) {
    console.log(error);
  }
}, POLLING_INTERVAL);
