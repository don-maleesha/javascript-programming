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
    console.log(color);
}