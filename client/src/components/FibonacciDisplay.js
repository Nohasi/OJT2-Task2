import React from "react";

export const FibonacciDisplay = ({fibonacciSequence, errorMessage}) => {
    let outputString = '';
    let outputClassname = '';
    if (errorMessage == ''){
        outputString = fibonacciSequence;
        outputClassname = '';
    }
    else {
        outputString = errorMessage;
        outputClassname = 'blink';
    }

    return( 
        <div className="display-board">
            <h2 style={{color: '#08466C', fontStyle:'italic'}}>Fibonacci Sequence:</h2>
            <div className={outputClassname}>
                <h3 style={{paddingRight: '20px', paddingLeft: '20px'}}>
                    {outputString}
                </h3>
            </div>
        </div>
    )
};