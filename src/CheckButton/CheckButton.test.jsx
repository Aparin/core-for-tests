/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import CheckButton from './CheckButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckButton bool check={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckButton bool={false} check={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
