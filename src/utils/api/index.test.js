const api = require('./index');

describe('api util', () => {
  it('serves as configured axios', () => {
    expect(api).toHaveProperty('defaults');
    expect(api).toHaveProperty('interceptors');
    expect(api).toHaveProperty('request');
  });
});
