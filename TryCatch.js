// Objective: Understand the try-catch block

try { 
    // Try to execute the code inside this block.
    console.log(a + b); // Attempt to log the sum of 'a' and 'b'.

} catch (error) { 
    // If there is an error during the execution of the try block, catch it and execute the code inside this catch block.
    console.log(error); // Log the error object, which in this case will be a ReferenceError since 'a' and 'b' are not defined.
    console.log("Error: " + error); // Log the error with a custom message.
    console.log("The error was saved in the error log"); // Log a message indicating the error has been logged.

}

console.log("The program continues..."); // Log a message indicating that the program execution continues past the try-catch block.

try {
    // Throw a new ReferenceError manually.
    throw new ReferenceError(); 

} catch (error) {    

    // Catch the thrown error and execute the code inside this catch block.
    console.log("Error: " + error); // Log the error object, which will be the manually thrown ReferenceError.
    console.log("The error was saved in the error log"); // Log a message indicating the error has been logged.
    
} 

console.log("The program continues..."); // Log a message indicating that the program execution continues past the try-catch block.
