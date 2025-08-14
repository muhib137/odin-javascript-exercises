const sumAll = function (start, finish) {
  if (Number.isNaN(start + finish)) return "ERROR";
  if (!Number.isInteger(start + finish)) return "ERROR";
  if (start < 0 || finish < 0) return "ERROR";

  let sum = 0;
  if (start > finish) {
    for (let i = finish; i <= start; i++) {
      sum += i;
    }
  } else {
    for (let i = start; i <= finish; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
