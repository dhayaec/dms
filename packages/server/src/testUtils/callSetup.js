require('ts-node/register');

// If you want to reference other typescript modules, do it via require:
const { setup, setupDb } = require('./setup');

module.exports = async function() {
  await setup();
  return null;
};
