import React, { useState, useEffect } from 'react';
import '../mock/mock';
import http from '../utils/http';
import { useAlert } from '../hooks/UseAlert';
import MessageContext from '../context/MessageContext';

function HomeView() {
  const { alertCount, setAlertCount } = useAlert();

  const [date, setDate] = useState(null);
  const [info, setInfo] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const res = await http.get('http://test.cn/text');
        setInfo(res);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  const handleChange = (value) => {
    message.info(
      `您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`,
    );
    setDate(value);
  };

  return (
    <MessageContext.Consumer>
      {({ messageCount, setMessageCount }) => (
        <div style={{ width: 400, margin: '100px auto' }}>
          {messageCount}
          <Button onClick={() => setMessageCount(0)}>clear message</Button>
          {alertCount}
          <Button onClick={() => setAlertCount(0)}>clear alert</Button>
          <DatePicker onChange={handleChange} />
          <Alert
            message="当前日期"
            description={date ? date.format('YYYY年MM月DD日') : '未选择'}
          />
          <p>{info}</p>
          <Button type="primary">primary</Button>
        </div>
      )}
    </MessageContext.Consumer>
  );
}

export default HomeView;
