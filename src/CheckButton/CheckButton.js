import React from 'react';
import Button from '@material-ui/core/Button';
import '../animate.css';

const CheckButton = ({check, bool}) => {
  if (bool) {
    return (
      <div className="animated fadeInLeft delay-2s">
        <Button 
          variant="contained" 
          color="primary" 
          style={{marginTop: '10px'}} 
          onClick={check} >
          Проверить
        </Button>
      </div>
    )
  }
  return <span></span>
  
}

export default CheckButton;