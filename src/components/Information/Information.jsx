import React from 'react';
import './information.css';

const Information = (props) => {
  return (
    <div>
      <p className='text'>{props.text}</p>
    </div>
  )
}

export default Information;
