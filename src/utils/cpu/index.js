const si = require('systeminformation');

const logger = require('../logger');

const CPU = {
  get: async () => {
    try {
      const { main } = await si.cpuTemperature();
      const details = await si.cpu();

      return {
        temperature: main,
        ...details,
      };
    } catch (error) {
      return logger(error);
    }
  },
};

module.exports = CPU;
