const paths = require('./paths');

const POLLING_INTERVAL = 1000;
const API_BASE = process.env.FIREBASE_API;

module.exports = {
  paths,
  POLLING_INTERVAL,
  API_BASE,
};
