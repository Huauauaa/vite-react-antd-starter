import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import { getThemeVariables } from 'antd/dist/theme';
import commonjs from 'rollup-plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';
import { injectHtml } from 'vite-plugin-html';
import dotenv from 'dotenv';
import fs from 'fs';
import { GitRevisionPlugin } from 'git-revision-webpack-plugin';
import themeVariables from './config/macaron';
import packageInfo from './package.json';

const gitRevisionPlugin = new GitRevisionPlugin();

try {
  const file = dotenv.parse(fs.readFileSync(`.env.local`));
  // eslint-disable-next-line
  for (const key of Object.keys(file)) {
    process.env[key] = file[key];
  }
} catch (e) {
  console.error(e);
}

const components = [
  'ConfigProvider',
  'DatePicker',
  'message',
  'Alert',
  'Button',
  'Menu',
];

const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default () =>
  defineConfig({
    base: '/vite-react-antd-starter/',
    plugins: [
      reactRefresh(),
      injectHtml({
        injectData: {
          title: 'vite-react-antd-starter',
          git: {
            version: gitRevisionPlugin.version(),
            branch: gitRevisionPlugin.branch(),
            commitHash: gitRevisionPlugin.commithash(),
          },
          packageInfo,
          injectScript: isProduction
            ? [
                `<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>`,
                `<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>`,
                `<script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.8/antd.min.js" integrity="" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
              ].join('')
            : '',
        },
      }),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/lib/${name}/style/index.less`,
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
        `import React, { useState, useEffect } from 'react';`,
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
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_PROXY || 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, ''), // 将 /api 重写为空
        },
      },
    },
  });
