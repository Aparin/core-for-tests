import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info
    });
  }

  render() {

    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h2 style={{color: 'red'}}>Тест сломался. </h2>
          <p>Обратитесь к админу сайта. </p>
          <p>Ошибка: {this.state.error}</p>
          <p>Информация по ошибке: {this.state.info}</p>
        </React.Fragment>
      )
    }
    return this.props.children;
  }
}
