import React from 'react';
import PropTypes from 'prop-types';
import AlertDialog from './AlertDialog';

const Popup = ({ bool }) => {
  if (bool) {
    return <AlertDialog />;
  }
  return <span />;
};

Popup.propTypes = {
  bool: PropTypes.bool.isRequired,
};

export default Popup;
