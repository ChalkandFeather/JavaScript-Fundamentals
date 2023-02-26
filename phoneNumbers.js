
const checkLength = (friendsNumbers) => {
  if (friendsNumbers.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = friendsNumbers.filter(checkLength);

const friendsNumbers = [
  '1763687364', 
  '4763687363', 
  '7867867862', 
  'AAAA#####AAAA#87@768767382672' , 
  '763687363', 
  '4763687363'];



/* Array example  const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;*/

