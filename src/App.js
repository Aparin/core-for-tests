import React, { Component } from 'react';
import './App.css';
import './animate.css';

class App extends Component {
  state = {
    questionNumber: 1,
    key: 1,
    result: 0,
  }
  render() {
    return (
      <div className="App animated fadeInDown">
        <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
