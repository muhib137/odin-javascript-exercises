const reverseString = function(string) {
  let reversedString = '';
  const stringChars = string.split("");
  for(let i = string.length - 1; i >= 0; i--){
    reversedString += stringChars[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
