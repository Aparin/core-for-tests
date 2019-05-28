import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../animate.css';

const NextButton = ({ bool, next }) => {
  if (bool) {
    return (
      <div className="animated fadeInLeft delay-2s">
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
          onClick={next}
        >
          Далее
        </Button>
      </div>
    );
  }
  return <span />;
};

NextButton.propTypes = {
  next: PropTypes.func.isRequired,
  bool: PropTypes.bool.isRequired,
};

export default NextButton;
