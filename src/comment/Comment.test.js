import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment bool={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment bool={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});