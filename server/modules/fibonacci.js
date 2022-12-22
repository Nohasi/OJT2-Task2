// Fibonacci function that returns all values
const fibonacci = (sequenceLength) => {
    if(typeof sequenceLength === 'string'){
        // regex to remove all non-numeric values from string, and round decimals up
        sequenceLength = Math.round(parseFloat(sequenceLength.replace(/[^0-9,.]+/g, "")));
    }
    console.log(`Sequence Length = ${sequenceLength}`);
    if (sequenceLength <= 1){return sequenceLength;}
    const sequence = [0, 1];
    for (let i = 2; i <= sequenceLength; i++){
        sequence[i] = sequence[i-2] + sequence[i-1];
    }
    return sequence;
}

module.exports = fibonacci;