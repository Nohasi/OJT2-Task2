import React from "react";

export const LengthForm = ({sequenceLength, setSequenceLength, setSequence}) => {

    let findSequence = async (data) => {
        data.preventDefault();
        try {
            console.log(`Sequence length is ${sequenceLength}`);
            const response = await fetch(`http://localhost:4090/fibonacci?sequenceLength=${sequenceLength}`, {
                method: 'GET',
                headers: {'Content-type': 'application/json'}
            });
    
            let resJson = await response.json();
            if (response.status === 200){
                console.log(`Sequence: ${resJson.sequence}`);
                setSequence(resJson.sequence);;
            }
        }
        catch (error) {
            console.log('error: could not connect to API server');
            return "error: could not connect to API server";
        }
    }
    
    return (
        <div style={{paddingBottom: '15px'}} className="col-md-4">
            <form onSubmit={findSequence}>
              <input type="text" value={sequenceLength} placeholder="Enter Desired Sequence Length Here" onChange={(e) => setSequenceLength(e.target.value)}></input>
              &nbsp;&nbsp;&nbsp;
              <button type="submit">Generate Fibonacci</button>
            </form>
        </div>
    );
}