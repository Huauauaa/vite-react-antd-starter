import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import './index.css';
import AlertProvider from './providers/AlertProvider';
import MessageProvider from './providers/MessageProvider';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <AlertProvider>
      <MessageProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </MessageProvider>
    </AlertProvider>
  </ConfigProvider>,
  document.getElementById('root'),
);
