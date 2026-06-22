```bash
# Best time to buy and sell stock

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }

        const currentProfit = prices[i] - minPrice;

        if(currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }

    return maxProfit;
};


```
