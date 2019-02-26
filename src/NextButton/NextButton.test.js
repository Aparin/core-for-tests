import React from 'react';
import ReactDOM from 'react-dom';
import NextButton from './NextButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NextButton bool={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NextButton bool={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});