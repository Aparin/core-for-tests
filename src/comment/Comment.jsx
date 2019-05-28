import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ bool, msg }) => {
  if (bool) {
    return <div>{msg}</div>;
  }
  return <span />;
};

Comment.propTypes = {
  msg: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default Comment;
