import React from 'react';
import Button from '@material-ui/core/Button';
import './animate.css';

const CheckButton = ({check}) => {
  return (
    <div className="animated fadeInLeft delay-2s">
      <Button variant="contained" color="primary" style={{marginTop: '10px'}} >
        Проверить
      </Button>
    </div>

  )
}

export default CheckButton;