//task01: Write a function that takes a number as a parameter and prints the number.

function letterFinder(word, match) {

    for ( var i = 0; i < word.length; i++) {

        if (word[i] === match) {

            console.log("Found the "  + match + " at " + i);

            
        } else {

            console.log("No match found at " + i);

        }

    }

}

letterFinder("test", "t");



