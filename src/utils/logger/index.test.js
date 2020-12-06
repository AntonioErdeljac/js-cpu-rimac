const logger = require('./index');

describe('logger util', () => {
  it('serves as console.log', () => {
    const expectedName = 'log';

    expect(logger.name).toBe(expectedName);
  });
});
