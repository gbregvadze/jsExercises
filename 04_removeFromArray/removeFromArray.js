const removeFromArray = function (array, ...args) {
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
};

// Do not edit below this line
module.exports = removeFromArray;
