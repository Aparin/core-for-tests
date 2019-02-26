import React, { Component } from 'react';
import '../animate.css';
import CheckButton from '../CheckButton/';
import Popup from '../Popup/';
import Comment from '../Comment/';
import NextButton from '../NextButton/';
import QuestionTitle from '../QuestionTitle/';
import ResultMessage from '../ResultMessage/';
import AnswerChoices from '../AnswerChoices/';

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
  
  componentDidMount() {
    fetch('question.json')
      .then((responce) => {return responce.text()})
      .then((text) => {return JSON.parse(text)})
      .then((array) => {this.setState({questions: array})})
  }
  
  render() {
    if (this.state.questions === undefined) {
      
      return  <div>Вопросы теста загружаются</div>
    } 
    const questions = this.state.questions;
    const select = numb => {
      this.setState({ selected: numb})
    }
    const questionNumber = this.state.questionNumber;
    
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
       
        <AnswerChoices 
          answers={questions[questionNumber].slice(1,4)} 
          key={"answers" + questionNumber}
          bool={this.state.questionListBool}
          select={select}
        />

        <CheckButton check={check} bool={this.state.checkButtonBool} />
        <Popup bool={this.state.popup} />

        <Comment 
          bool={this.state.commentBool} 
          msg={questions[this.state.questionNumber][5]} 
        />
        
        <NextButton 
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
