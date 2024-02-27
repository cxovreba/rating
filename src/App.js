import { useState } from 'react';
import './App.css';
import Image from './components/Image/Image';
import Title from './components/Title/Title';
import Information from './components/Information/Information';
import Button from './components/Button/Button';
import ResultCard from './components/ResultCard/ResultCard';

function App() {
  const [checkNumber, setCheckNumber] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const checkNumbers = (number) => {
    setCheckNumber(number);
  }

  const handleSubmit = () => { 
    setSubmitted(true);
  }

  console.log();

  return (
    <div className="App">
      {submitted ? (
        <ResultCard value={checkNumber} />
      ) : (
        <>
          <div className='card'>
            <Image />
            <Title title='How did we do?' />
            <Information text='Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!' />
            <div className="option">
              {[1, 2, 3, 4, 5].map(number => (<Button value={number} onClick={() => checkNumbers(number)} key={number} />))}
            </div>
            <button className='submit' onClick={handleSubmit}>SUBMIT</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
