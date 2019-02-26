import React from 'react';
import ReactDOM from 'react-dom';
import AnswerChoices from './AnswerChoices';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnswerChoices 
                    bool={true} 
                    answers={['Вариант1', 'Вариант2', 'Вариант3']}  
                  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnswerChoices 
                    bool={false} 
                    answers={['Вариант1', 'Вариант2', 'Вариант3']}  
                  />, div);
  ReactDOM.unmountComponentAtNode(div);
});