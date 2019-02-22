import React from 'react';

const ResultMessage = ({bool, result, number}) => {
  if (bool) {
    return <h2>Вы прошли тест с результатом: <br />{result} правильных ответов из {number}</h2>
  }
  return <span></span>;
}

export default ResultMessage;