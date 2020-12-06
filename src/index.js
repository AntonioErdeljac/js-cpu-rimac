require('dotenv').config();

const { sysinfo } = require('./utils');

sysinfo.sync({ battery: 'percent', temp: '*', mem: '*', networkConnections: '*' });
