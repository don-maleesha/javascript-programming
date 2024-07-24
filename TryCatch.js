// Objective: Understand the try-catch block
try { // try to execute the code

    console.log(a + b);

} catch (error) { // if there is an error, catch it and execute the code inside the catch block

    console.log(error); // ReferenceError: a is not defined
    console.log("Error: " + error);
    console.log("The error was saved in the error log");


}

console.log("The program continues...");

try {

    throw new ReferenceError();

} catch (error) {    

    console.log("Error: " + error);
    console.log("The error was saved in the error log");

} 

console.log("The program continues...");