import { useContext } from 'react';
import AlertContext from '../context/AlertContext';

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error(
      `The 'useAlert' hook must be used inside the <AlertContext> component's context.`,
    );
  }
  return context;
};
