/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import '../animate.css';
import CheckButton from '../CheckButton';
import Popup from '../Popup';
import Comment from '../Comment';
import NextButton from '../NextButton';
import QuestionTitle from '../QuestionTitle';
import ResultMessage from '../ResultMessage';
import AnswerChoices from '../AnswerChoices';
import ErrorBoundary from '../ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }


  componentDidMount() {
    fetch('question.json')
      .then(responce => responce.text())
      .then(text => JSON.parse(text))
      .then((array) => { this.setState({ questions: array }); });
  }

  render() {
    const { questions } = this.state;
    if (questions === undefined) {
      return <div>Вопросы теста загружаются</div>;
    }

    const select = (numb) => {
      this.setState({ selected: numb });
    };
    const { questionNumber } = this.state;

    const check = () => {
      const { answer } = this.state;
      if (answer === 0) {
        return this.setState({ popup: true });
      }

      const trueAnswer = questions[questionNumber][4];
      this.setState({ selected: 0 });

      if (answer === trueAnswer) {
        this.setState(prev => ({ result: prev.result + 1 }));
      }

      this.setState({
        questionListBool: false,
        checkButtonBool: false,
        commentBool: true,
        commentButtonBool: true,
      });
      return undefined;
    };

    const next = () => {
      // провера на конец массива, или изменения стейта номер вопроса
      if (questionNumber < questions.length - 1) {
        // первый элемент массива содежит количество вариантов ответа
        this.setState(prev => ({
          questionNumber: prev.questionNumber + 1,
          questionListBool: true,
          checkButtonBool: true,
          commentBool: false,
          commentButtonBool: false,
        }));
      } else {
        this.setState({
          questionTitleBool: false,
          questionListBool: false,
          checkButtonBool: false,
          commentBool: false,
          commentButtonBool: false,
          resultBool: true,
        });
      }
    };

    const {
      questionTitleBool,
      questionListBool,
      checkButtonBool,
      popup,
      commentBool,
      commentButtonBool,
      resultBool,
      result,
    } = this.state;
    return (
      <ErrorBoundary>
        <div className="App">
          <QuestionTitle
            key={questionNumber}
            msg={questions[questionNumber][0]}
            bool={questionTitleBool}
          />

          <AnswerChoices
            answers={questions[questionNumber].slice(1, 4)}
            key={`answers${questionNumber}`}
            bool={questionListBool}
            select={select}
          />

          <CheckButton check={check} bool={checkButtonBool} />
          <Popup bool={popup} />

          <Comment
            bool={commentBool}
            msg={questions[questionNumber][5]}
          />

          <NextButton
            bool={commentButtonBool}
            next={next}
          />

          <ResultMessage
            bool={resultBool}
            result={result}
            number={questionNumber}
          />

        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
