const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add support for Prisma
config.resolver.alias = {
  ...config.resolver.alias,
  '.prisma/client/index-browser': '@prisma/client/index-browser',
};

// Ensure proper handling of React Native modules
config.resolver.platforms = ['native', 'web', 'ios', 'android'];

module.exports = config;