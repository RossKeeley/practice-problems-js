// As a user I want to be able to be able to add classes to my basket and pay for them together so that I can plan out my exercise for the week quickly because going through checkout multiple times can be tedious.
// Acceptance Criteria
// ● Must have working code at the end of the test
// ● Must calculate the total price
// ● Must be able to add different items to the basket
// ● Must handle errors effectively
// ● Must allow duplicate types



const items = {
yoga: { price: 100},
spin: { price: 80},
boxing: { price: 60},
spa: { price: "50"}
}
const basket = [];
const classes = Object.keys(items);

const addItemToBasket = () => {
  var text;
  var stuff = prompt("What classes would you like to take?", "separate with commas");
  switch(stuff) {
    case "yoga":
    basket.push(yoga);
    text = "Yoga class added to basket";
    
  }





  // let arguments = [...args]
  // arguments.forEach(function(i) {
  //   if (classes.indexOf(i) >= 0) {
  //     basket.push(i);
  //   } else {
  //     console.log(i + " class does not exist");
  //   } 
  // });
  // return basket;
}


const calculateBasketPrice = () => {
  let prices = [];
  basket.forEach(function(i) {
    if (i == 'yoga') {
      prices.push(items.yoga.price);
    } else {
      if (i == 'spin') {
        prices.push(items.spin.price);
      } else {
        if (i == 'boxing') {
          prices.push(items.boxing.price);
        } else {
          if (i == 'spa') {
            prices.push(items.spa.price);
          }
        }
      }
    }
  });
  var price = prices.map(function (x) { 
    return parseInt(x, 10); 
  })
  let totalPrice = "YOUR TOTAL: " + "$" + price.reduce((a, b) => a + b);
  return totalPrice
}

const removeItemFromBasket = (...args) => {
  let arguments = [...args];
  arguments.forEach(function(i) {
    if (basket.indexOf(i) >= 0) {
      basket.splice(basket.indexOf(i), 1);
    }
  });
  return basket;
  
  return totalPrice;
  return calculateBasketPrice();
}
const testScript = () => {
}
testScript();

console.log(addItemToBasket('yoga', 'spin', 'boxing', 'spin', 'chicken', 'spa', "anything babe, it doesn't matter"));
console.log(calculateBasketPrice());
console.log(removeItemFromBasket('spin', 'yoga', 'the deep, horrible abyss'));

