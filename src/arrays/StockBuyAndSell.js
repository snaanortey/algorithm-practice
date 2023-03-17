/**
 * FINDING OUT WHEN TO BUY AND SELL A STOCK FOR MAXIMUM PROFIT
 * Example if arr={1,5,3,8,12} we buy at 1 and sell at 5; and buy at 3 and sell at 12, profit is 13
 * if arr={30,20,10} decreasing order, we don't buy at all since we will make losses
 * if arr={10,20,30} increasing order, we buy the first stock and sell the last
 * if a arr={1,5,3,1,2,8} we buy at 1 and sell at 5; then buy at 1 and sell at 8
 */

//If elements in array is one or less than one, we return profit of zero immediately
//If elements are two or more

/**
 * The function returns the max profit from stock prices in an array
 * @param {*} arr stock prices
 * @returns maximum profit
 */
function stockBuyAndSell(arr) {
  let profit = 0;
  if (arr.length <= 1) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      profit = profit + arr[i + 1] - arr[i];
    } else {
      profit = profit;
    }
  }
  return profit;
}

console.log(stockBuyAndSell([1, 5, 3, 1, 2, 8]));
