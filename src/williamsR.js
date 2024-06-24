// Function to calculate Williams %R
function calculateWilliamsR(highs, lows, closes, period = 14) {
    // Ensure there are enough data points
    if (highs.length < period || lows.length < period || closes.length < period) {
        return null; // Or handle appropriately based on your use case
    }

    const highestHigh = Math.max(...highs.slice(0, period));
    const lowestLow = Math.min(...lows.slice(0, period));
    const currentClose = closes[closes.length - 1];
    const williamsR = ((highestHigh - currentClose) / (highestHigh - lowestLow)) * -100;

    return williamsR;
}

module.exports = calculateWilliamsR;
