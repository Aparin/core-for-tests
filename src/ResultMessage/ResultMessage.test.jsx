/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import ResultMessage from './ResultMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultMessage bool result={3} number={3} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultMessage bool={false} result={3} number={3} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
