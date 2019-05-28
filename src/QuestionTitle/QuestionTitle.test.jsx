/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import QuestionTitle from './QuestionTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionTitle bool msg="mesage" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionTitle bool={false} msg="mesage" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
