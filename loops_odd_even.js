// For all numbers from 0 to 10 Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.
for (let i = 0 ; i <= 20 ; i++) {
  if (i % 2 === 0 ) {
    console.log(`${i} is even`);// interpolation requires string in backticks
} else {
    console.log(`${i} is odd`);
}
} 
//OR
//because we are using console.log the result is printed when called in terminal with simply: node loops_odd_even.js

// alternativly  
const getParity = (number) => {
  if (number % 2 === 0) {
    else {
      return 'odd';
    }
  }

  for (let i = 0 ; i <= 20 ; i++) {
    const parity = getParity(i);
    console.log(`${i} is ${parity}`);
  }
}