import React from 'react';

const ResultMessage = ({bool, result, number}) => {
  if (bool) {
    return <span>
        <h2>Вы прошли тест с результатом:</h2> <h3>{result} правильных ответов из {number}</h3>
      </span>
  }
  return <span></span>;
}

export default ResultMessage;