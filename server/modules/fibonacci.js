// Fibonacci function that returns all values
const fibonacci = (sequenceLength) => {
    if (sequenceLength <= 1){return sequenceLength;}
    const sequence = [0, 1];
    for (let i = 2; i <= sequenceLength; i++){
        sequence[i] = sequence[i-2] + sequence[i-1];
    }
    return sequence;
}

module.exports = fibonacci;