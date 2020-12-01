const { cpu, logger } = require('./utils');
const { POLLING_INTERVAL } = require('./constants');

setInterval(async () => {
  try {
    const info = await cpu.get();

    const payload = {
      cpu: info,
    };

    const timestamp = `[CPU - ${new Date().toLocaleTimeString()}]`;

    logger(timestamp, payload);
  } catch (error) {
    logger(error);
  }
}, POLLING_INTERVAL);
