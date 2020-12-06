const si = require('systeminformation');
const { addSeconds } = require('date-fns');

const logger = require('../logger');
const { POLLING_INTERVAL } = require('../../constants');

const observe = (params, cb) => {
  const callback = async (data) => {
    try {
      const { main } = await si.cpuTemperature();
      const values = {
        temperature: main,
        batteryPercentage: data.battery.percent,
        memoryPercentage: Math.ceil((data.mem.used / data.mem.total) * 100),
        networkConnections: data.networkConnections.length,
        expiresAt: addSeconds(new Date(), 5),
      };

      return cb(values);
    } catch (e) {
      return logger.error(e);
    }
  };

  si.observe(params, POLLING_INTERVAL, callback);
};

module.exports = { observe };
