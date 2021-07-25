import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import { getThemeVariables } from 'antd/dist/theme';
import commonjs from 'rollup-plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';
import { injectHtml } from 'vite-plugin-html';
import themeVariables from './config/macaron';

const components = [
  'ConfigProvider',
  'DatePicker',
  'message',
  'Alert',
  'Button',
  'Menu',
];

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-antd-starter/',
  plugins: [
    reactRefresh(),
    injectHtml({
      injectData: {
        title: 'vite-react-antd-starter',
        injectScript: [
          process.env.NODE_ENV === 'production' &&
            [
              `<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>`,
              `<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>`,
              `<script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.8/antd.min.js" integrity="" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
            ].join(''),
        ]
          .filter(Boolean)
          .join(''),
      },
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
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
  esbuild: {
    jsxInject: [
      `import React, { useState } from 'react';`,
      `import PropTypes from 'prop-types';`,
      `import { ${components.join(', ')} } from 'antd';`,
    ].join(''),
  },
  build: {
    rollupOptions: {
      external: ['react-dom', 'react', 'antd'],
      plugins: [
        commonjs(),
        externalGlobals({
          'react-dom': 'ReactDOM',
          react: 'React',
          antd: 'antd',
        }),
      ],
    },
  },
});
