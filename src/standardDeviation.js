function calculateStandardDeviation(data, windowSize) {
    const n = data.length;
    const standardDeviations = [];
  
    // Calculate the standard deviation for each element in the data
    for (let i = 0; i < n; i++) {
      if (i < windowSize - 1) {
        standardDeviations.push(null); // Not enough data points yet to calculate standard deviation
        continue;
      }
  
      const windowData = data.slice(i - windowSize + 1, i + 1);
      const mean = windowData.reduce((sum, value) => sum + value, 0) / windowSize;
      const variance = windowData.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / windowSize;
      const stdDev = Math.sqrt(variance);
  
      standardDeviations.push(stdDev);
    }
  
    return standardDeviations;
  }
  
  module.exports = calculateStandardDeviation