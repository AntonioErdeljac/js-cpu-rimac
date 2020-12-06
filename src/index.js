require('dotenv').config();

const { collections } = require('./constants');
const { api, sysinfo, logger } = require('./utils');

const callback = (values) => {
  logger.info(`[${new Date()}] - Syncing`);

  const ref = api.db.ref(collections.INFO);
  return ref.update(values);
};

sysinfo.observe({ battery: 'percent', temp: '*', mem: '*', networkConnections: '*' }, callback);
