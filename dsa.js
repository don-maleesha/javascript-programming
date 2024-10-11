const fruits = ['kiwi', 'mango', 'apple', 'pear'];

function appendIndex(fruit, index){
  console.log(`${index + 1}. ${fruit}`);
}

fruits.forEach(appendIndex);

//forEach() is a method that calls a function once for each element in an array.

const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach(function(veggie, index){
  console.log(`${index + 1}. ${veggie}`);
});

const nums = [1, 2, 3, 4, 5];

// Store or log the filtered array
const filteredNums = nums.filter(function(num){
  return num > 2; // Changed to > 2 to match the array values
});

console.log(filteredNums); // Output: [3, 4, 5]

// The map method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.
console.log([0,10,20,30,40,50].map(function(num){
  return num / 5;
}));

const result = [];
const drone = {
  speed: 100,
  color: 'red',
}

const droneKeys = Object.keys(drone);

droneKeys.forEach(function(key){
  result.push(key, drone[key]);
});

console.log(result);

let bestBoxers = new Map();
bestBoxers.set('heavyweight', 'Muhammad Ali');
bestBoxers.set('middleweight', 'Sugar Ray Robinson');
bestBoxers.set('lightweight', 'Roberto Duran');

console.log(bestBoxers);
console.log(bestBoxers.get('heavyweight'));

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);