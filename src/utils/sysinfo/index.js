const si = require('systeminformation');

const logger = require('../logger');

const CPU = {
  get: async () => {
    try {
      const { temp, battery, mem, networkConnections } = await si.getDynamicData();

      const temperature = temp.main;
      const batteryPercentage = battery.percent;
      const memoryPercentage = (mem.used / mem.total) * 100;

      return {
        temperature,
        batteryPercentage,
        memoryPercentage,
        networkConnections: networkConnections.length,
      };
    } catch (error) {
      return logger(error);
    }
  },
};

module.exports = CPU;
