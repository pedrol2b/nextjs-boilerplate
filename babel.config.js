module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['next/babel'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@app': './src/app',
            '@public': './public',
          },
        },
      ],
    ],
  }
}
