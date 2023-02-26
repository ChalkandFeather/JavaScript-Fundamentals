class Candy {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }

  getName() {
     return this.name;
  }

  getCost() {
    return this.cost;
  }
}
module.exports = Candy


/*

//candy.getName();
'Mars'
> candy.getcost();
4.99

> const basket = new ShoppingBasket();
> basket.getTotalPrice();
0

> basket.addItem(candy);

> basket.getTotalPrice();
4.99

> basket.addItem(new Candy('Skittle', 3.99));
> basket.addItem(new Candy('Skittle', 3.99));

> basket.getTotalPrice();
12.97*/