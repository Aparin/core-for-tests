/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import NextButton from './NextButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NextButton bool next={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NextButton bool={false} next={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
