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

    logger(payload);
  } catch (error) {
    logger(error, 'error');
  }
}, POLLING_INTERVAL);
