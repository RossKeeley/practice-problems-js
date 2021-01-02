function sym(args) {
  var args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  };
  function findDiff(arr1, arr2) {
    var result = [];
    arr1.forEach((num) => {
      if(arr2.indexOf(num) < 0 && result.indexOf(num) < 0) {
        result.push(num);
      };
    });
    arr2.forEach((num) => {
      if(arr1.indexOf(num) < 0 && result.indexOf(num) < 0) {
        result.push(num);
      };
    });
    return result;
  }
  return args.reduce(findDiff);
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
