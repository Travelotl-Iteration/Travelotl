module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    transform: {
      '^.+\\.jsx$': 'babel-jest',
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      '@root(.*)$': '<rootDir>/$1',
      '@client(.*)$': '<rootDir>/client/$1',
      '@server(.*)$': '<rootDir>/server/$1',
      '@__mocks__(.*)$': '<rootDir>/__mocks__/$1',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
        '<rootDir>/fileMock.js',
      '\\.(s?css|less)$': 'identity-obj-proxy',
    },
  };