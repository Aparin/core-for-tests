import React from 'react';
import ReactDOM from 'react-dom';
import QuestionTitle from './QuestionTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionTitle bool={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionTitle bool={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});