import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ bool, msg }) => {
  function createMarkup() {
    return { __html: msg };
  }
  if (bool) {
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
  return <span />;
};

Comment.propTypes = {
  msg: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default Comment;
