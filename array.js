const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => {
  console.log(number);
}); 

const iteratorFunction = (number) => {
  console.log(number);
}
let sum = 0; 
numbers.forEach((number) =>{
  sum += number
});
sum

//pasted into node => returns the sum of 55