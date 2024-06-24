const exponentialMovingAverage = require('./exponentialMovingAverage');

function calculateMACD(data, shortPeriod = 12, longPeriod = 26, signalPeriod = 9) {
    const shortEMA = exponentialMovingAverage(data, shortPeriod);
    const longEMA = exponentialMovingAverage(data, longPeriod);

    // Ensure shortEMA and longEMA arrays have the same length
    const MACDLine = shortEMA.map((value, index) => value - longEMA[index]);
    
    const signalLine = exponentialMovingAverage(MACDLine.slice(-signalPeriod), signalPeriod);

    return { MACDLine: MACDLine[MACDLine.length - 1], signalLine: signalLine[signalLine.length - 1] };
}

module.exports = calculateMACD;
