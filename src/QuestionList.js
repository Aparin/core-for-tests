import React from 'react';
import './animate.css';
import Question from './Question';

const QuestionList = ({k, items, select}) => {
  const elements = items.map((item, index) => {
      return(
            <Question 
              key={'l' + k + index} 
              qkey={'q' + k + index} 
              lbl={item} 
              value={index + 1} 
              select={select} // функция, меняет selected in state
            />  
      )}
  );
  return (<div>{elements}</div>);
}

export default QuestionList;