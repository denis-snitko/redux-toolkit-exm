import React from 'react';
import { useSelector } from 'react-redux';

export const GateContainer = ({ children }) => {
  const { isShow } = useSelector(state => state.isShow);

  if (!isShow) return null;
  return <>{children}</>;
};
