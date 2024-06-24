function calculateStochasticOscillator(highs, lows, closes, period = 14) {
    if (highs.length < period || lows.length < period || closes.length < period) {
        return null;
    }

    const highestHigh = Math.max(...highs.slice(-period));
    const lowestLow = Math.min(...lows.slice(-period));
    const currentClose = closes[closes.length - 1];
    const stochasticOscillator = ((currentClose - lowestLow) / (highestHigh - lowestLow)) * 100;

    return stochasticOscillator;
}

module.exports = calculateStochasticOscillator;
