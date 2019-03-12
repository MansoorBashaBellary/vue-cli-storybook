const webpack = require('webpack');

module.exports = ({config}) => {
  const plugins = config.plugins;

  // plugins.push(
  //   new webpack.EnvironmentPlugin({
  //     COSMOS_DISABLE_RESETS: true
  //   })
  // )
  const newConfig = { ...config };

  // Export bundles as libraries so we can access them on page scope.
  newConfig.output.library = '[name]';

  return newConfig;
}
