// module.exports = require('@leanup/stack-react/webpack.config');

module.exports = (env, argv) => {
  const { webpackConfig } = require('@leanup/stack-webpack/lib/webpack.config');

  const ESBUILD_LOADER_JSX = {
    test: /\.js$/,
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
    },
  };

  // const ESBUILD_LOADER_TSX = {
  //   test: /\.tsx$/,
  //   loader: 'esbuild-loader',
  //   options: {
  //     loader: 'tsx',
  //   },
  // };

  return webpackConfig(env, argv, [ESBUILD_LOADER_JSX]);
};
