var num1 = 10; // Global Scope

function score() { // Local Scope
    var num2 = 20;
    console.log(num2);
}

// Block Scope: let and const
// let is used for variables that can be reassigned.
// const is used for variables that cannot be reassigned.

let color = 'blue'; // Block Scope

if(color == 'blue') {
    let color = 'red'; // Block Scope
    console.log(color); // red
}

console.log(color); // blue

//var: (ES5) - Function Scope
// can be used before it is declared
// Same variable can be declared multiple times
// Can be scoped to a function or globally

//let: (ES6) - Block Scope
// Cannot be used before it is declared
// Same variable cannot be declared multiple times
// Can be scoped to a block, statement or expression