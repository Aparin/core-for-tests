import React, { Component } from 'react';
import './animate.css';
import questions from './questions';
import QuestionList from './QuestionList';
import CheckButton from './CheckButton';
import Popup from './Popup';
import Comment from './comment/Comment';
import CommentButton from './comment/CommentButton';
import QuestionTitle from './QuestionTitle';

class App extends Component {
  state = {
    questionNumber: 1,
    result: 0,
    selected: 0,
    questionTitleBool: true,
    questionListBool: true,
    checkButtonBool: true,
    popup: false,
    comment: false,
    commentButton: false,
  }
  render() {
    const select = numb => {
      this.setState({ selected: numb})
    }
    const trueAnswer = questions[this.state.questionNumber][4];
    const questionNumber = this.state.questionNumber;

    const items = (() => {
      let arr = [];
      for (let i = 1; i <= questions[0]; i++) { // questions[0] - количество вариантов ответа
        arr.push(questions[questionNumber][i]);
      }  
      return arr;
    });
    
    const check = () => {
      const answer = this.state.selected; 
      if(answer === 0) {
        return this.setState({popup: true});
      }

      if (answer === trueAnswer) {
        console.log('true');
      } else {
        console.log('false');
      }
    };

    return (
      <div className="App">
        <QuestionTitle 
          key={questionNumber} 
          msg={questions[questionNumber][0]} 
          bool={this.state.questionTitleBool}
        />

        <QuestionList 
          k={questionNumber} 
          items={items()} 
          select={select} 
          bool={this.state.questionListBool} 
        />

        <CheckButton check={check} checkButtonBool={this.state.checkButtonBool} />
        <Popup bool={this.state.popup} />

        <Comment 
          bool={this.state.comment} 
          msg={questions[this.state.questionNumber][5]} 
        />
        

      </div>
    );
  }
}

export default App;
