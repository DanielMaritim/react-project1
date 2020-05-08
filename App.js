import React,{useState} from 'react';
import Tweet from './tweet';

function App() {
  
  const [isRed, setRed] = useState(false);
  const [count,setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  return(
    <div className="app">
      <h2 className={isRed ? 'red' : ''}>change my color</h2>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
     
    </div>
  );
}

export default App;
