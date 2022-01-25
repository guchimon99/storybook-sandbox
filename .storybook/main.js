const path = require("path")

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../components/**/*.stories.js'],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-actions"
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  }
}
