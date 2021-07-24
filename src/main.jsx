import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
import './index.css';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root'),
);
