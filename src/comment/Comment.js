import React from 'react';

const Comment = ({bool, msg}) => {
  if (bool) {
    return <div>{msg}</div>
  }
  return <span></span>
}

export default Comment;