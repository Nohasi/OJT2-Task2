import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FibonacciDisplay } from './components/FibonacciDisplay';
import { LengthForm } from './components/LengthForm'

function App() {

  let [sequenceLength, setSequenceLength] = useState(0);
  let [sequence, setSequence] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="App">
      <header></header>
        <div style={{backgroundColor: "#a5b5bf"}}>
        <div className="row">
          <h1>Fibonacci Sequence Calculator</h1>
        </div>
        <div className="row">
          <LengthForm
            sequenceLength = {sequenceLength}
            setSequence = {setSequence}
            setSequenceLength = {setSequenceLength}
            setErrorMessage = {setErrorMessage}
          ></LengthForm>
        </div>
        </div>
        <div>
          <FibonacciDisplay
           fibonacciSequence = {sequence}
           errorMessage = {errorMessage}
           ></FibonacciDisplay>
        </div>
      </div>
  );
}

export default App;
