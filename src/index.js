const { cpu, logger } = require('./utils');
const { POLLING_INTERVAL } = require('./constants');

setInterval(async () => {
  try {
    const temperature = await cpu.temperature();
    const details = await cpu.details();

    const payload = {
      cpu: {
        temperature: temperature.main,
        ...details,
      },
    };

    const timestamp = `[CPU - ${new Date().toLocaleTimeString()}]`;

    logger(timestamp, payload);
  } catch (error) {
    logger(error);
  }
}, POLLING_INTERVAL);
