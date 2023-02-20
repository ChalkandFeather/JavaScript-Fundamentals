const getNumberSign = (number) => {
  //if number is positive,return 'positive'
  //if number is negative, return 'negative'
  //if zero, return  'zero'
if (number === 0) {
  return 'zero';
} else if (number > 0) {
  return 'positive';
} else {
    return 'negative';
  }
}

module.exports = getNumberSign;

``` in terminal with node do-
javascript-fundamentals git:(main) ✗ node
Welcome to Node.js v19.6.1.
Type ".help" for more information.
> const getNumberSign = require('./conditionals.js')
undefined
> getNumberSign
[Function: getNumberSign]
> getNumberSign(0)
'zero'
> getNumberSign(4)
'positive'
> getNumberSign(-11)
'negative'
> 