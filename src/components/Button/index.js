import React from 'react';
import styled from 'styled-components';

const StartButton = styled.button`
  position: absolute;
  z-index: 1000;
  height: 40px;
  width: 100px;
  top: 47%;
  left: 46%;  

  color: white;
  font-weight: 400;
  background-color: #A149CC;
  border: 1px solid transparent;
  border-color: #A149CC;
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0,0,0);
  text-align: center;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: #8303c1;
    border-color: #8303c1;
  }
`;

const Button = props => {
  return <StartButton onClick={props.playVideo}>Start Video</StartButton>;
};

export default Button;