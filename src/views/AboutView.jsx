import React, { useState, useEffect } from 'react';
import http from '../utils/http';
import '../mock/mock';

console.log(import.meta.env);

function AboutView() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await http.get('/me');
        // const res = await http.get('http://test.cn/me');
        setUserInfo(res);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <p>
      My name is {userInfo.name || 'anonymity'}, I am {userInfo.age || 18}.
    </p>
  );
}

export default AboutView;
