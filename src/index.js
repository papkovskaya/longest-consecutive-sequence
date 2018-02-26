module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0){
    return 0;
  } 
  if (array.length == 1){
    return 1;
  } 
  let a = 1;
  let b = 0;
  
  array = array.sort();
  for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] == 1) {
      a++;
    }
    if (array[i] - array[i - 1] == 0) {
      continue;
    }
    if (array[i] - array[i - 1] > 1) {
      if (a > b){
        b = a;
      }
      a = 1;
    }
  }
  return b;
}