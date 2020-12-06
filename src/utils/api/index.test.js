const firebase = require('firebase/app');
require('./index');

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
  database: jest.fn(),
}));

describe('api util', () => {
  it('initializes firebase', async () => {
    expect(firebase.initializeApp).toHaveBeenCalled();
  });

  it('initializes database', async () => {
    expect(firebase.database).toHaveBeenCalled();
  });
});
