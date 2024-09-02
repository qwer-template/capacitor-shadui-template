import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.qwergo.capacitor',
  appName: 'capacitor-shadui-template',
  webDir: 'dist',
  plugins: {
    CapacitorUpdater: {
      autoUpdate: false,
    }
  }
};

export default config;
