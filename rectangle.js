class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width;
  }
}

module.exports = Rectangle;

/* javascript-fundamentals git:(main) ✗ node
Welcome to Node.js v19.6.1.
Type ".help" for more information.
> const Rectangle = require('./rectangle');
undefined
> const rect = new Rectangle(4, 10);
undefined
> rect.getArea();
40  */

