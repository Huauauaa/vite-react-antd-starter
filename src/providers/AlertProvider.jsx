import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AlertContext from '../context/AlertContext';

const AlertProvider = ({ children }) => {
  const [alertCount, setAlertCount] = useState(0);
  const value = useMemo(() => ({ alertCount, setAlertCount }), [
    alertCount,
    setAlertCount,
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setAlertCount((a) => a + 1);
    }, 1e3);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlertProvider;
