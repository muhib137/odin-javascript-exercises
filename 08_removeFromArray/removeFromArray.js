const removeFromArray = function (arr, ...rest) {
  const newArr = [];
  for(const num of arr){
    if(rest.includes(num)) continue;
    newArr.push(num);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
