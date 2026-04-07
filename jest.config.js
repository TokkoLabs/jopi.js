const fs = require('fs')
const path = require('path')

const packagesDir = path.resolve(__dirname, 'packages')
const packageNameMapper = fs
  .readdirSync(packagesDir)
  .reduce((mapper, folder) => {
    const pkgJsonPath = path.join(packagesDir, folder, 'package.json')
    if (!fs.existsSync(pkgJsonPath)) return mapper
    const { name, module: mod } = JSON.parse(
      fs.readFileSync(pkgJsonPath, 'utf8')
    )
    if (name) {
      const entry = mod || 'src/index.js'
      mapper[`^${name}$`] = `<rootDir>/packages/${folder}/${entry}`
    }
    return mapper
  }, {})

module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  moduleNameMapper: {
    '^.+\\.(css)$': '<rootDir>/packages/datepicker/config/CSSStub.js',
    ...packageNameMapper,
  },
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [],
  },
}
