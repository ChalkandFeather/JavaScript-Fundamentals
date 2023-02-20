const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length === validLength) {
  return true;
  } else {
  return false;
  }
}
module.exports = isValidLength;

```javascript-fundamentals git:(main) ✗ node
Welcome to Node.js v19.6.1.
Type ".help" for more information.
> const isValidLength = require('./loops.js')
undefined
> isValidLength('00');
false
> isValidLength('00112233445');
true
> 