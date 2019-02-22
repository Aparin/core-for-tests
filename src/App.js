import React, { Component } from 'react';
import './animate.css';
import questions from './questions';
import QuestionList from './QuestionList';
import CheckButton from './CheckButton';
import Popup from './Popup';
import Comment from './comment/Comment';
import CommentButton from './comment/CommentButton';
import QuestionTitle from './QuestionTitle';
import ResultMessage from './ResultMessage';

class App extends Component {
  state = {
    questionNumber: 1,
    result: 0,
    selected: 0,
    questionTitleBool: true,
    questionListBool: true,
    checkButtonBool: true,
    commentBool: false,
    commentButtonBool: false,
    resultBool: false,
    popup: false,
  }
  render() {
    const select = numb => {
      this.setState({ selected: numb})
    }
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

      const trueAnswer = questions[this.state.questionNumber][4];
      this.setState({selected: 0});

      if (answer === trueAnswer) {
        this.setState({
          result: this.state.result + 1,
        });
      } else {
        console.log('false');
      }
      this.setState({
        questionListBool: false,
        checkButtonBool: false,
        commentBool: true,
        commentButtonBool: true,
      })
    };

    const next = () => {
      // провера на конец массива, или изменения стейта номер вопроса
      if (this.state.questionNumber < questions.length - 1) { // первый элемент массива содежит количество вариантов ответа
        this.setState({
          questionNumber: this.state.questionNumber + 1,
          questionListBool: true,
          checkButtonBool: true,
          commentBool: false,
          commentButtonBool: false,
        });
      } else {
        this.setState({
          questionTitleBool: false,
          questionListBool: false,
          checkButtonBool: false,
          commentBool: false,
          commentButtonBool: false,
          resultBool: true,
        })
      }
    }

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
          bool={this.state.commentBool} 
          msg={questions[this.state.questionNumber][5]} 
        />
        
        <CommentButton 
          bool={this.state.commentButtonBool}
          next={next} 
        />
        
        <ResultMessage 
          bool={this.state.resultBool}
          result={this.state.result}
          number={this.state.questionNumber}
        />

      </div>
    );
  }
}

export default App;
