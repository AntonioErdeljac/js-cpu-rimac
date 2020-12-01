const si = require('systeminformation');

const CPU = {
  temperature: () => si.cpuTemperature().then((temperature) => temperature),
  details: () => si.cpu().then((details) => details),
};

module.exports = CPU;
