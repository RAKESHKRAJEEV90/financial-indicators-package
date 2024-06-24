function calculateMFI(highs, lows, closes, volumes, period = 14) {
    const typicalPrices = [];
    const moneyFlows = [];

    for (let i = 0; i < closes.length; i++) {
        const typicalPrice = (highs[i] + lows[i] + closes[i]) / 3;
        typicalPrices.push(typicalPrice);
    }

    for (let i = 1; i < typicalPrices.length; i++) {
        const moneyFlow = typicalPrices[i] * volumes[i];
        moneyFlows.push(moneyFlow);
    }

    const positiveMoneyFlow = [];
    const negativeMoneyFlow = [];

    for (let i = 1; i < closes.length; i++) {
        if (closes[i] > closes[i - 1]) {
            positiveMoneyFlow.push(moneyFlows[i]);
        } else if (closes[i] < closes[i - 1]) {
            negativeMoneyFlow.push(moneyFlows[i]);
        }
    }

    const positiveFlowSum = positiveMoneyFlow.reduce((acc, val) => acc + val, 0);
    const negativeFlowSum = negativeMoneyFlow.reduce((acc, val) => acc + val, 0);

    if (negativeFlowSum === 0) return 100; // Avoid division by zero

    const moneyFlowRatio = positiveFlowSum / negativeFlowSum;
    const mfi = 100 - (100 / (1 + moneyFlowRatio));

    return mfi;
}

module.exports = calculateMFI;
