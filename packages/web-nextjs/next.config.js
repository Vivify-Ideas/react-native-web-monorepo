const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withCss = require('@zeit/next-css');

require('dotenv').config();

const withTM = require('next-transpile-modules')(
  [
    'components',
    'services',
    'assets',
    'config',
    'constants',
    'i18n',
    'store',
    'styles',
    'utils',
    'validation',
  ],
  {
    resolveSymlinks: true,
  },
);

const css = withCss({
  cssModules: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
});

const nextConfig = {};

module.exports = withPlugins(
  [
    [css, {}],
    [optimizedImages, {}],
    [
      withTM,
      {
        webpack(config, { isServer }) {
          if (!isServer) {
            config.node = {
              fs: 'empty',
            };
          }

          config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web',
          };

          config.resolve.extensions = ['.web.js', ...config.resolve.extensions];
          return config;
        },
      },
    ],
  ],
  nextConfig,
);
