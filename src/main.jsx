import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import './index.css';
import AlertProvider from './providers/AlertProvider';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <AlertProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AlertProvider>
  </ConfigProvider>,
  document.getElementById('root'),
);
