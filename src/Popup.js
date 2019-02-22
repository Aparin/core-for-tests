import AlertDialog from './AlertDialog';
import React from 'react';

const Popup = ({bool}) => {
  if (bool) {
    return <AlertDialog />;
  }
  return <span></span>;
}

export default Popup;