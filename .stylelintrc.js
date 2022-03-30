module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-styled-components'],
  rules: {
    // disabled because of prettier
    'number-leading-zero': null,

    // disabled because of styled-components
    'declaration-empty-line-before': null,
    'value-keyword-case': null,
  },
  customSyntax: "@stylelint/postcss-css-in-js",
}
