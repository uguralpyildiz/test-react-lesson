import React,{useState} from 'react';

import './App.css';

//import components
import Nav from './components/Nav.js'
import Tweet from './components/Tweet.js'

function App() {

 const [counter, setCounter] = useState(0);


  const incrementer = () =>{
    setCounter((prev) => prev + 1)
  };

  return (
    <>
      <Nav />
      <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={incrementer}>Count</button>  
      </div>
      <Tweet />
    </>
  );
}

export default App;
