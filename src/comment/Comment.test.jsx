/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment bool msg="message" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment bool={false} msg="message" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
