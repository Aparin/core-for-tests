/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const ResultMessage = ({ bool, result, number }) => {
  if (bool) {
    return (
      <span>
        <h2>Вы прошли тест с результатом:</h2>
        <h3>
          {result} правильных ответов из {number}
        </h3>
      </span>
    );
  }
  return <span />;
};

ResultMessage.propTypes = {
  bool: PropTypes.bool.isRequired,
  result: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
};

export default ResultMessage;
