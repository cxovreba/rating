import React from 'react';
import './ResultCard.css';
import logo from '../Image/Online payment.png'
import Title from '../Title/Title';
import Information from '../Information/Information';

const ResultCard = ({value}) => {
  return (
    <div className='result-card'>
        <img className='icon' src={logo} alt="" />
        <span className='result'>You selected {value} out of 5</span>
        <Title title='Thank you!' />
        <Information text='We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'/>
    </div>
  )
};

export default ResultCard
