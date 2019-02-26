import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Popup bool={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Popup bool={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});