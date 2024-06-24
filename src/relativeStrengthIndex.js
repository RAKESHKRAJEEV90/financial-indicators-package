function calculateRSI(data, windowSize) {
    if (data.length === 0) return [];
    if (windowSize <= 0) throw new Error("Window size must be greater than 0");

    let gains = [];
    let losses = [];
    let rsiArray = [];

    for (let i = 1; i < data.length; i++) {
        let change = data[i] - data[i - 1];
        gains.push(change > 0 ? change : 0);
        losses.push(change < 0 ? -change : 0);
    }

    let avgGain = gains.slice(0, windowSize).reduce((a, b) => a + b, 0) / windowSize;
    let avgLoss = losses.slice(0, windowSize).reduce((a, b) => a + b, 0) / windowSize;

    rsiArray.push(100 - (100 / (1 + avgGain / avgLoss)));

    for (let i = windowSize; i < gains.length; i++) {
        avgGain = (avgGain * (windowSize - 1) + gains[i]) / windowSize;
        avgLoss = (avgLoss * (windowSize - 1) + losses[i]) / windowSize;
        rsiArray.push(100 - (100 / (1 + avgGain / avgLoss)));
    }

    // Pad the beginning of the array with nulls for the initial period
    while (rsiArray.length < data.length - 1) {
        rsiArray.unshift(null);
    }

    return rsiArray;
}

module.exports =  calculateRSI ;
