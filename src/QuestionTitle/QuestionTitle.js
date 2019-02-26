import React from 'react';
import '../animate.css';

const QuestionTitle = ({msg, bool}) => {
  if (bool) {
    return (
      <h2 style={{color: 'darkblue', marginBottom: '10px'}} className="animated fadeInLeft">
        {msg}  
      </h2>
    )
  }
  return <span></span>
} 

export default QuestionTitle;