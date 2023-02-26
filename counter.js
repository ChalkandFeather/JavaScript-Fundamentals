let counter = 0;
const increment = () => {
  counter += 1;
  console.log(`${counter}`);
  if (counter === 10) {
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(increment, 1000)



