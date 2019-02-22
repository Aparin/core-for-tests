import React from 'react';

const QuestionTitle = ({msg, bool}) => {
  if (bool) {
    return (
      <h2 className="animated fadeInLeft">
        {msg}  
      </h2>
    )
  }
  return <span></span>
} 

export default QuestionTitle;