require('dotenv').config();

const { addSeconds } = require('date-fns');

const { api, sysinfo } = require('./utils');
const { POLLING_INTERVAL, collections } = require('./constants');

setInterval(async () => {
  try {
    const info = await sysinfo.get();

    const ref = api.db.ref(collections.INFO);
    ref.update({ ...info, expiresAt: addSeconds(new Date(), 5) });
  } catch (error) {
    console.log(error);
  }
}, POLLING_INTERVAL);
