function exponentialMovingAverage(data, windowSize) {
  if (data.length === 0) return [];
  if (windowSize <= 0) throw new Error("Window size must be greater than 0");

  let k = 2 / (windowSize + 1);
  let emaArray = [data[0]]; // Start with the first data point

  for (let i = 1; i < data.length; i++) {
      let ema = data[i] * k + emaArray[i - 1] * (1 - k);
      emaArray.push(Math.round(ema * 100) / 100); // Round to 2 decimal places
  }

  return emaArray;
}

module.exports = exponentialMovingAverage ;
