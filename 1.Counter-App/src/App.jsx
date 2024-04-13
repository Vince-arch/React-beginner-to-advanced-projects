import { React, useState } from 'react'
import Button from "./components/Button"

function App(){
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(prevCount => prevCount + 1);    
  }

  let decrementCount = () => {
    if (count >0){
    setCount(prevCount => prevCount - 1)
    }}

  let resetCount = () => {
    setCount(0);
  }

  return(
    <div style={{textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <p style={{fontSize: '2em'}}>{count}</p>
      <div className="buttons" style={{display: 'flex', gap: '10px'}}>
        <Button title={"-"} action={decrementCount} />
        <Button title={"+"} action={incrementCount} />
        <Button title={"Reset"} action={resetCount} />
      </div>
    </div>
  )
}

export default App;