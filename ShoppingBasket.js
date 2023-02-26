const Candy = require('./Candy');

class ShoppingBasket {
  constructor() {
    this.items = [];
  } 

  //add item to shopping basket array
    addItem(item) {
      return this.items.push(item);
     
  }
//calculate total price for items in basket array
    getTotalPrice() {
      return this.items
        .map((item) => item.getPrice())
        .reduce((total, price) => total + price, 0);
    };
  }

 
module.exports = ShoppingBasket;

/* To test prog in terminal ➜  javascript-fundamentals git:(main) ✗ node
Welcome to Node.js v19.6.1.
Type ".help" for more information.
> const Candy = require('./Candy');
undefined
> const ShoppingBasket = require('./ShoppingBasket');
undefined
>  const candy = new Candy('Mars', 4.99);
undefined
>  candy.getName()
'Mars'
> candy.getcost
undefined
> candy.getCost()
4.99
> const basket = new ShoppingBasket();
undefined
> basket.addItem(new Candy('Skittle', 3.99));
1
> basket.addItem(new Candy('Skittle', 3.99));
2
> */