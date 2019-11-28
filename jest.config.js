module.exports = {
  verbose: true,
  reporters: [
    'default',
    './.submission-system/customJestReporter.js',
  ],
  transformIgnorePatterns: ['<rootDir>/basic-mongo-one/node_modules/'],
};
