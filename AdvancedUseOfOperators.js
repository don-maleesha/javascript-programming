var score = 8;

console.log("Mid-level skills: " + (score > 0 && score < 10)); // true


var timeRemaining = 0;
var energy = 0;

console.log("Game Over: " + (timeRemaining == 0 || energy == 0)); // true

var num1 = 2;
var num2 = 5;

var test1 = num1 % 2;

var test2 = num2 % 2;

var result1 = (test1 == 0);

var result2 = (test2 == 0);

console.log("Is " + num1 + " an even number? " + result1); // true

console.log("Is " + num2 + " an even number? " + result2); // false 