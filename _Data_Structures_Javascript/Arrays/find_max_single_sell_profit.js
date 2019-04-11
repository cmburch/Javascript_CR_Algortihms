
// Find maximum single sell profit
// Given a list of stock prices for n days, find the maximum profit with a single buy/sell activity.

let find_buy_sell_stock_prices = function(array) {
    if (!array || array.length < 2) {
      return;
    }
  //this puts the function into an early state i.e this act like a constructor
    let current_buy = array[0];
    let global_sell = array[1];
    let global_profit = global_sell - current_buy; //the highest profit so far
  
    let current_profit = 0;
  
    for (let i = 1; i < array.length; i++) {
      //1 calculate the current profit
      //array[i] is the current sell
      current_profit = array[i] - current_buy;
  
      if (current_profit > global_profit) {
        global_profit = current_profit;//this is the most profit earned from trade
        global_sell = array[i];//this is the best price to sell
      }
    //you want to buy at the lowest price possible
      if (current_buy > array[i]) {
        current_buy = array[i];
      }
    }
  
    return [global_sell - global_profit, global_sell];
  };

// Runtime Complexity
// O(n)

// Memory Complexity
// O(1)