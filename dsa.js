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
