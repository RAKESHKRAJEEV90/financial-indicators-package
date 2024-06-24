function movingAverage(data, windowSize) {
  if (windowSize > data.length) return [];
  let result = [];
  for (let i = 0; i <= data.length - windowSize; i++) {
      let window = data.slice(i, i + windowSize);
      let average = window.reduce((acc, val) => acc + val, 0) / windowSize;
      result.push(Math.round(average * 100) / 100);
  }
  return result;
}

module.exports = movingAverage;
