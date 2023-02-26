const fizzBuzz = require('./fizzbuzz.js')

const fizzbuzzUntil = (number) => {
  for (let num = 1 ; num <= number; i++) {
    console.log (fizzBuzz(num));
  }
  }

  module.exports = fizzbuzzUntil;

  /*➜  terminal => node call
> const fizzbuzzUntil = require('./fizzbuzzUntil');
undefined
> fizzbuzzUntil(15)
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz */
