const logger = require('./index');

describe('logger util', () => {
  it('serves as console.log', () => {
    expect(logger).tohaveProperty('log');
  });
});
