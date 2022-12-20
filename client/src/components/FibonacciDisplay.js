import React from "react";

export const FibonacciDisplay = ({fibonacciSequence}) => {

    return( 
        <div className="display-board">
            <h2 style={{color: 'white', fontStyle:'italic'}}>Fibonacci Sequence:</h2>
            <div className="number">
                <h3>
                    {fibonacciSequence}
                </h3>
            </div>
        </div>
    )
};