import React from 'react';
import PropTypes from 'prop-types';
import '../animate.css';

const QuestionTitle = ({ msg, bool }) => {
  if (bool) {
    return (
      <h2 style={{ color: 'darkblue', marginBottom: '10px' }} className="animated fadeInLeft">
        {msg}
      </h2>
    );
  }
  return <span />;
};
QuestionTitle.propTypes = {
  bool: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
};

export default QuestionTitle;
