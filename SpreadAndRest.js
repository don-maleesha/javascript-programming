//spread operator to concatenate arrays
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const berries = ['strawberry', 'blueberry', 'blackberry', 'cranberry', 'raspberry'];
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

//spread operator to join objects
const flying = {wings: 2};
const car = {wheels: 4};
const flyingCar = {...flying, ...car};
console.log(flyingCar);

//add new members to arrays without using the push method
let veggies = ['carrot', 'broccoli', 'spinach', 'kale', 'lettuce'];
veggies = [...veggies, 'cabbage', 'cauliflower', 'brussels sprouts'];
console.log(veggies);

//convert a string to an array using the spread operator
const greeting = 'Hello';
const arrayOfLetters = [...greeting];
console.log(arrayOfLetters);

//copy either an object or an array into a separate one
const car1 = {
    speed: 100,
    color: 'red'
}

const car2 = {...car1};

car1.speed = 200;

console.log(car1.speed, car2.speed);

//copy an array into another array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];
arr1.pop()
console.log(arr1, "not", arr2);