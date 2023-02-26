
const addToBatch = (array, number) => {
  // create newBatch array  
  // add new number to addToBatch
  // if addToBatch contains >= 5 push number to newBatch array
  // else console.log add o
  if (array.length >=5 ){
    return array;
  }
  return array.concat(number);
}




module.exports = addToBatch;

// adds one element and return a new array
