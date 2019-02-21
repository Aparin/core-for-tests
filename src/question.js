import React from 'react';
import './animate.css';

const Question = ({qKey, lbl, value, select}) => {
  return (
    <div className="animated fadeInLeft delay-1s">
      <input type="radio" name="answer" value={value} id={qKey} 
              onChange={
                () => select(value)
              } 
      />
      <label htmlFor={qKey}>{lbl}</label>
    </div>
  )
}

export default Question;