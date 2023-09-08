import React, {useState} from 'react';

const App = () => {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState('cold');
  
  let incrementValue = () => {
   if (tempValue <= 29){ setTempValue(prevValue=> prevValue+1)}
   if (tempValue >=15) {setTempColor('hot')};
  };
   
  let decrementValue = () => {
    if (tempValue >= 1){  setTempValue(prevValue=> prevValue-1)}
    if (tempValue <15) {setTempColor('cold')}
  };
       
	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
			</div>
			<div className='button-container'>
				<button onClick={incrementValue}>+</button>
				<button onClick={decrementValue}>-</button>
			</div>
		</div>
	);
};

export default App;