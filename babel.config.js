module.exports = {
  presets: [
    '@babel/preset-flow',
    ['@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
