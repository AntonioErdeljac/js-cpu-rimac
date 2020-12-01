const { cpu, logger } = require('./utils');
const { POLLING_INTERVAL } = require('./constants');

setInterval(async () => {
  try {
    const info = await cpu.get();

    const payload = {
      cpu: info,
    };

    logger(payload);
  } catch (error) {
    logger(error);
  }
}, POLLING_INTERVAL);
