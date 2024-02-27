import React from 'react';
import "./Button.css";

const Button = ({onClick, props, value}) => {
  return <button className='btn' onClick={onClick} key={props}>{value}</button>
}

export default Button;
