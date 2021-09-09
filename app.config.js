const environment = process.env.ENVIRONMENT;

if (!["staging", "qa", "prod"].find((x) => x == environment)) 
  throw new Error(`Environment "${environment}" is not supported. Set the environment variable named "ENVIRONMENT" and try again.`);

export default {
  expo: {
    name: "expo-eas-env-issue",
    slug: "expo-eas-env-issue",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.clickview.expoeasenvissue",
    },
    web: {
      favicon: "./assets/images/favicon.png",
    },
  },
};
