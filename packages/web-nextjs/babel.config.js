module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['react-native-web', { commonjs: true }],
    [
      'module-resolver',
      {
        root: './',
        alias: {
          i18n: '../i18n',
          components: '../components',
          utils: '../utils',
          validation: '../validation',
          styles: '../styles',
          store: '../store',
          services: '../services',
          assets: '../assets',
          constants: '../constants',
          'react-navigation': '../services/webNavigation.js',
          '@react-native-async-storage/async-storage':
            '../services/webAsyncStorage.js',
        },
      },
    ],
  ],
};
