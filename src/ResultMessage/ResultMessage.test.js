import React from 'react';
import ReactDOM from 'react-dom';
import ResultMessage from './ResultMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultMessage bool={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultMessage bool={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});