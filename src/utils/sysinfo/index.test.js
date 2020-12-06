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
    const callback = jest.fn();

    sysinfo.observe(
      {
        battery: 'percent',
        temp: '*',
        mem: '*',
        networkConnections: '*',
      },
      callback,
    );

    expect(si.observe).toHaveBeenCalled();
  });
});
