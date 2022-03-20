import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MessageContext from '../context/MessageContext';

const MessageProvider = ({ children }) => {
  const [messageCount, setMessageCount] = useState(0);
  const value = useMemo(() => ({ messageCount, setMessageCount }), [
    messageCount,
    setMessageCount,
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setMessageCount((a) => a + 1);
    }, 1e3);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageProvider;
