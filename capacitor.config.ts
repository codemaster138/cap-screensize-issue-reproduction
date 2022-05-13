/// <reference types="@capacitor/keyboard" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test',
  webDir: 'build',
  bundledWebRuntime: false,
	plugins: {
		Keyboard: {
			resizeOnFullScreen: true
		}
	}
};

export default config;
