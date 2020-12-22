/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */

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

module.exports = withTM({
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
});
