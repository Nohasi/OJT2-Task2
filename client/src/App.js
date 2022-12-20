import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FibonacciDisplay } from './components/FibonacciDisplay';
import { LengthForm } from './components/LengthForm'

function App() {

  let [sequenceLength, setSequenceLength] = useState(0);
  let [sequence, setSequence] = useState("");

  return (
    <div className="App">
      <header></header>
      <div className="container mrgnbtm">
        <div className="row">
          <h1>Fibonacci Sequence Calculator</h1>
        </div>
        <div className="row">
          <LengthForm
            sequenceLength = {sequenceLength}
            setSequence = {setSequence}
            setSequenceLength = {setSequenceLength}
          ></LengthForm>
          <div className="col-md-4">
            <FibonacciDisplay
              fibonacciSequence = {sequence}>
            </FibonacciDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
