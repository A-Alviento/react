import React from 'react';
import { createRoot } from 'react-dom/client';


const { useState } = React

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return (
    <button onClick={handleClick}>
      +{increment}
    </button>
  );
}

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = (increment) => {
    setCount(count + increment)
  }
  
  return (
    <div>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <span>{count}</span>
    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
