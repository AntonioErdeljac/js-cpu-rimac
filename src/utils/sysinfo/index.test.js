const sysinfo = require('./index');

describe('sysinfo util', () => {
  it('returns all required system information', async () => {
    const data = await sysinfo.get();

    expect(data).toHaveProperty('temperature');
    expect(data).toHaveProperty('batteryPercentage');
    expect(data).toHaveProperty('memoryPercentage');
    expect(data).toHaveProperty('networkConnections');
  });
});
