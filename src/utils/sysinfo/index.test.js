const si = require('systeminformation');

const sysinfo = require('./index');

jest.mock('../api', () => ({
  db: () => {},
}));

jest.mock('systeminformation', () => ({
  observe: jest.fn(),
}));

describe('sysinfo util', () => {
  it('starts observing dynamic data', async () => {
    sysinfo.sync({
      battery: 'percent',
      temp: '*',
      mem: '*',
      networkConnections: '*',
    });

    expect(si.observe).toHaveBeenCalled();
  });
});
