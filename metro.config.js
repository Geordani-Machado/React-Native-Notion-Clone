const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add support for Prisma
config.resolver.alias = {
  ...config.resolver.alias,
  '.prisma/client/index-browser': '@prisma/client/index-browser',
};

// Explicitly resolve react-native-quick-base64 for @prisma/react-native
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'react-native-quick-base64': path.resolve(__dirname, 'node_modules/react-native-quick-base64'),
};

// Ensure proper handling of React Native modules
config.resolver.platforms = ['native', 'web', 'ios', 'android'];

module.exports = config;