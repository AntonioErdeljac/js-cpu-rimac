const logger = require('./index');

describe('logger util', () => {
  it('serves as winston instance', async () => {
    expect(logger.constructor.name).toBe('DerivedLogger');
  });
});
