const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: [/\.md$/],
    loaders: ['raw-loader'],
    include: [path.resolve(__dirname, '../')]
  });

  config.module.rules.push({
    test: [/\.md$/],
    loaders: ['markdown-loader'],
    include: [
      path.resolve(__dirname, '../changelog.md'),
      path.resolve(__dirname, '../CONTRIBUTING.md')
    ]
  });

  config.resolve.alias['storybook'] = path.resolve(__dirname, '.');

  return config;
};
