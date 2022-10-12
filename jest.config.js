module.exports = {
  testRunner: 'jest-circus/runner',
  verbose: true,
  reporters: ['default', 'jest-junit'],
  testTimeout: 10000,
  setupFiles: ['./setup.js']
};
