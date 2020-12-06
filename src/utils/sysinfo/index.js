const si = require('systeminformation');

const SYS_INFO = {
  get: async () => {
    try {
      const { temp, battery, mem, networkConnections } = await si.getDynamicData();

      const temperature = temp.main;
      const batteryPercentage = battery.percent;
      const memoryPercentage = Math.ceil((mem.used / mem.total) * 100);

      return {
        temperature,
        batteryPercentage,
        memoryPercentage,
        networkConnections: networkConnections.length,
      };
    } catch (error) {
      return console.log(error);
    }
  },
};

module.exports = SYS_INFO;
