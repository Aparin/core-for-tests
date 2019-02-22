import React from 'react';
import Button from '@material-ui/core/Button';
import '../animate.css';

const CommentButton = ({bool, next}) => {
  if (bool) {
    return (
      <div className="animated fadeInLeft delay-2s">
        <Button 
          variant="contained" 
          color="primary" 
          style={{marginTop: '10px'}} 
          onClick={next} >
          Далее
        </Button>
      </div>
    )
  }
  return <span></span>
}

export default CommentButton;