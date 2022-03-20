import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import './index.css';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <App />
    </HashRouter>
  </ConfigProvider>,
  document.getElementById('root'),
);
