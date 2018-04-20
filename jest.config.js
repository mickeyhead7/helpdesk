const Ramda = require('ramda');
const aliases = require('./aliases');

const modifyAliases = (accumulator, alias) => {
  const rootModified = `${alias[0]}/(.*)$`;
  const pathModified = `${alias[1]}/$1`;

  return {
    ...accumulator,
    [rootModified]: pathModified,
  };
};

const aliasesModified = Ramda.reduce(modifyAliases, {}, Object.entries(aliases));

module.exports = {
  moduleNameMapper: {
    ...aliasesModified,
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    'gatsby-link': '<rootDir>/__mocks__/gatsby-linkMock.js',
  },
  setupFiles: [
    '<rootDir>/jest.setup.js',
  ],
};
