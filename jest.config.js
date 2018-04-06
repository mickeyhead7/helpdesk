module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    'gatsby-link': '<rootDir>/__mocks__/gatsby-linkMock.js',
  },
  setupFiles: [
    '<rootDir>/jest.setup.js',
  ],
};
