const exponentialMovingAverage = require('./exponentialMovingAverage');

function calculateATR(highs, lows, closes, period = 14) {
    const trueRanges = [];
    for (let i = 1; i < highs.length; i++) {
        const trueRange = Math.max(
            highs[i] - lows[i],
            Math.abs(highs[i] - closes[i - 1]),
            Math.abs(lows[i] - closes[i - 1])
        );
        trueRanges.push(trueRange);
    }

    const atr = exponentialMovingAverage(trueRanges, period);
    return atr[atr.length - 1]; // Return the last ATR value
}

module.exports = calculateATR;
