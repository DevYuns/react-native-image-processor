export default {
  expo: {
    name: 'image-processor',
    slug: 'image-processor-expo',
    privacy: 'public',
    platforms: ['ios', 'android', 'web'],
    version: '1.0.0',
    orientation: 'default',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    userInterfaceStyle: 'automatic',
    ios: {
      supportsTablet: true,
    },
    description: 'Starter project from image-processor-cli.',
  },
};
