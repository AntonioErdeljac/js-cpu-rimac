const si = require('systeminformation');
const { addSeconds } = require('date-fns');

const api = require('../api');
const { collections, POLLING_INTERVAL } = require('../../constants');

const sync = (params) => {
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

      const ref = api.db.ref(collections.INFO);
      ref.update(values);
      return values;
    } catch (e) {
      return e;
    }
  };

  si.observe(params, POLLING_INTERVAL, callback);
};

module.exports = { sync };
