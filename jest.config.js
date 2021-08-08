module.exports = {
  rootDir: './',
  moduleNameMapper: {
    '^@comp/(.*)$': '<rootDir>/components/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^@theme/(.*)$': '<rootDir>/themeConfigs/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@customTypes/(.*)$': '<rootDir>/customTypes/$1',
    '^@img/(.*)$': '<rootDir>/public/static/images/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/components/*/*.style.ts'],

  collectCoverage: true,
  collectCoverageFrom: ['./components/**/*.{js,jsx,ts,tsx}', './pagesLayout/**/*.{js,jsx,ts,tsx}', './utils/**/*.{js,jsx,ts,tsx}', '!./components/**/*.style.ts', '!./pagesLayout/**/*.style.ts'],
  coverageReporters: ['text', 'html', 'cobertura'],
  coverageDirectory: '<rootDir>/reports/coverage',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/reports/',
      },
    ],
  ],
};
