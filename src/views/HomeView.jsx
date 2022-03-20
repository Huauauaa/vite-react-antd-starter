import React, { useState, useEffect } from 'react';
import '../mock/mock';
import http from '../utils/http';

function HomeView() {
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
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <Alert
        message="当前日期"
        description={date ? date.format('YYYY年MM月DD日') : '未选择'}
      />
      <p>{info}</p>
      <Button type="primary">primary</Button>
    </div>
  );
}

export default HomeView;
