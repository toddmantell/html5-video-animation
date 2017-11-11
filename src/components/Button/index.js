import React from 'react';

const Button = props => {
  return (
    <div>
      <button onClick={props.playVideo}>Start Video</button>
    </div>
  );
};

export default Button;