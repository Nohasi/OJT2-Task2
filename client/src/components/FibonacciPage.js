import { useState } from 'react';
import { FibonacciDisplay } from './FibonacciDisplay';
import { LengthForm } from './LengthForm';

export const FibonacciPage = () => {
      // Setting states to alter the page dynamically
  let [sequenceLength, setSequenceLength] = useState(0);
  let [sequence, setSequence] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="App">
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