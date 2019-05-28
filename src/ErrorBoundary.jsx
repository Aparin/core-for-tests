/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    const { hasError, error, info } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    if (hasError) {
      return (
        <React.Fragment>
          <h2 style={{ color: 'red' }}>Тест сломался. </h2>
          <p>Обратитесь к админу сайта. </p>
          <p>Ошибка: {error}</p>
          <p>Информация по ошибке: {info}</p>
        </React.Fragment>
      );
    }
    return children;
  }
}
