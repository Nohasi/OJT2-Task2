import React from "react";

export const LengthForm = ({sequenceLength, setSequenceLength, setSequence}) => {

    let findSequence = async (data) => {
        data.preventDefault();
        try {
            const response = await fetch(`fibonacci?sequenceLength=${sequenceLength}`, {
                method: 'GET',
                mode: 'cors',
                headers: {'Accept': 'application/json'}
            });
    
            let resJson = await response.json();
            // if status === 200, we have a correct valid request
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
        <div style={{paddingBottom: '15px'}}>
            <form onSubmit={findSequence}>
              <input type="text" value={sequenceLength} placeholder="Enter Desired Sequence Length Here" onChange={(e) => setSequenceLength(e.target.value)}></input>
              &nbsp;&nbsp;&nbsp;
              <button type="submit">Generate Fibonacci</button>
            </form>
        </div>
    );
}