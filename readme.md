# financial-indicators-package

A comprehensive library for calculating various financial indicators for technical analysis.

## Features

- Moving Average Convergence Divergence (MACD)
- Stochastic Oscillator
- Average True Range (ATR)
- On-Balance Volume (OBV)
- Money Flow Index (MFI)
- Williams %R
- Moving Average (MA)
- Exponential Moving Average (EMA)
- Bollinger Bands

## Installation

Install the package via npm:

```bash
npm install financial-indicators-package
```
# Usage

Each indicator is available as a separate function. You can require and use them as needed.

## Example Usage

### MACD
```bash
const calculateMACD = require('financial-indicators').calculateMACD;

const data = [10, 12, 14, 13, 15, 17, 16, 18, 19, 20, 21];
const { MACDLine, signalLine } = calculateMACD(data);

console.log(`MACD Line: ${MACDLine}`);
console.log(`Signal Line: ${signalLine}`);
```

### Stochastic Oscillator
```bash
const calculateStochasticOscillator = require('financial-indicators').calculateStochasticOscillator;

const highs = [50, 55, 60, 62, 65, 68, 70, 72, 75, 78, 80];
const lows = [40, 42, 45, 48, 50, 52, 55, 58, 60, 62, 65];
const closes = [45, 50, 55, 58, 60, 63, 65, 68, 70, 72, 75];

const stochasticOscillator = calculateStochasticOscillator(highs, lows, closes);

console.log(`Stochastic Oscillator: ${stochasticOscillator}`);
```
### Average True Range (ATR)
```bash
const calculateATR = require('financial-indicators').calculateATR;

const highs = [10, 12, 14, 13, 15, 17, 16, 18, 19, 20, 21];
const lows = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const closes = [9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const atr = calculateATR(highs, lows, closes, 10);

console.log(`Average True Range (ATR): ${atr}`);
```
# API

`calculateMACD(data, shortPeriod = 12, longPeriod = 26, signalPeriod = 9)`

Calculates the MACD (Moving Average Convergence Divergence) line and the signal line.

-  `data`: Array of closing prices.
-  `shortPeriod`: Number of periods for the short-term EMA. Default is 12.
-  `longPeriod`: Number of periods for the long-term EMA. Default is 26.
-  `signalPeriod`: Number of periods for the signal line EMA. Default is 9.


Returns an object with `MACDLine` and `signalLine`.

`calculateStochasticOscillator(highs, lows, closes, period = 14)`

Calculates the Stochastic Oscillator.

-  `highs`: Array of high prices.
-  `lows`: Array of low prices.
-  `closes`: Array of closing prices.
-  `period`: Number of periods. Default is 14.

Returns the Stochastic Oscillator value.

`calculateATR(highs, lows, closes, period = 14)`

Calculates the Average True Range (ATR).

-  `highs`: Array of high prices.
-  `lows`: Array of low prices.
-  `closes`: Array of closing prices.
-  `period`: Number of periods. Default is 14.

Returns the ATR value.

`calculateOBV(closes, volumes)`

Calculates the On-Balance Volume (OBV).

-   `closes`: Array of closing prices.
-   `volumes`: Array of volumes.

Returns the OBV value.

`calculateMFI(highs, lows, closes, volumes, period = 14)`

Calculates the Money Flow Index (MFI).

-   `highs`: Array of high prices.
-   `lows`: Array of low prices.
-   `closes`: Array of closing prices.
-   `volumes`: Array of volumes.
-   `period`: Number of periods. Default is 14.

Returns the MFI value.

`calculateWilliamsR(highs, lows, closes, period = 14)`

Calculates the Williams %R.

-   `highs`: Array of high prices.
-   `lows`: Array of low prices.
-   `closes`: Array of closing prices.
-   `period`: Number of periods. Default is 14.

Returns the Williams %R value.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.