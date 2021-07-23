import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

import { getThemeVariables } from 'antd/dist/theme';
import themeVariables from './config/macaron';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-antd-starter/',
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          ...getThemeVariables({
            // dark: true, // Enable dark mode
            // compact: true, // Enable compact mode
          }),
          ...themeVariables,
        },
      },
    },
  },
});
