import React, { Component } from 'react';
import './animate.css';
import questions from './questions';
import QuestionList from './QuestionList';
import CheckButton from './CheckButton';

class App extends Component {
  state = {
    questionNumber: 1,
    result: 0,
    selected: 0,
  }
  render() {
    const select = numb => {
      this.setState({ selected: numb})
    }

    const questionNumber = this.state.questionNumber;
    const k = questionNumber;

    const items = (() => {
      let arr = [];
      for (let i = 1; i <= questions[0]; i++) { // questions[0] - количество вариантов ответа
        arr.push(questions[k][i]);
      }  
      return arr;
    });

    const check = () => {
      
    }
    return (
      <div className="App">
        <h2 className="animated fadeInLeft" key={questionNumber}>
            {questions[questionNumber][0]}
        </h2>
        <QuestionList k={k} items={items()} select={select} />
        <CheckButton check={check} />


      </div>
    );
  }
}

export default App;
