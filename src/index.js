const movingAverage = require("./movingAverage");
const exponentialMovingAverage = require("./exponentialMovingAverage");
const calculateRSI = require("./relativeStrengthIndex");
const calculateBollingerBands = require("./bollingerBands");
const calculateMACD = require("./calculateMACD");
const calculateStochasticOscillator= require('./stochasticOscillator')
const calculateATR = require('./calculateATR')
const calculateOBV = require('./onBalanceVolume')
const calculateMFI =require('./moneyFlowIndex')
const calculateWilliamsR = require('./williamsR')

module.exports = {
  movingAverage,
  exponentialMovingAverage,
  calculateRSI,
  calculateBollingerBands,
  calculateMACD,
  calculateStochasticOscillator,
  calculateATR,
  calculateOBV,
  calculateMFI,
  calculateWilliamsR
};
