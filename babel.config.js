module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: false,
        fileName: false,
      },
    ],
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
}
