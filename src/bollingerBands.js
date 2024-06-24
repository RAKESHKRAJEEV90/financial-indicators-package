const movingAverage = require('./movingAverage');
const calculateStandardDeviation = require('./standardDeviation');

function calculateBollingerBands(data, windowSize) {
  const sma = movingAverage(data, windowSize);
  const stdDev = calculateStandardDeviation(data, windowSize);
  const factor = 2;

  const upperBand = [];
  const lowerBand = [];

  for (let i = 0; i < data.length; i++) {
    if (i >= windowSize - 1) {
      if (stdDev[i] !== null && !isNaN(stdDev[i])) {
        upperBand.push(sma[i] + (stdDev[i] * factor));
        lowerBand.push(sma[i] - (stdDev[i] * factor));
      } else {
        upperBand.push(null);
        lowerBand.push(null);
      }
    } else {
      upperBand.push(null);
      lowerBand.push(null);
    }
  }

  return { upperBand, middleBand: sma, lowerBand };
}

module.exports = calculateBollingerBands;
