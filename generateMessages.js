const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(({ name, discount }) => {
return `Hi ' ${name}! ${discount}% off our best candies for you today!`;
});
}


 const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 10 },
  { name: 'Josh', discount: 40 },
  { name: 'min', discount: 25 },
  { name: 'karla', discount: 10 },
];
   

 module.exports = generateMessages(namesAndDiscounts);

/* javascript-fundamentals git:(main) ✗ node
Welcome to Node.js v19.6.1.
Type ".help" for more information.
> const generateMessages = require('./generateMessages');
undefined
> generateMessages
[
  "Hi ' Anna! 50% off our best candies for you today!",
  "Hi ' Laura! 10% off our best candies for you today!",
  "Hi ' Josh! 40% off our best candies for you today!",
  "Hi ' min! 25% off our best candies for you today!",
  "Hi ' karla! 10% off our best candies for you today!"
]