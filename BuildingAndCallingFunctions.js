// ex01: Building and calling functions
function addnumbers() {

    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;
    console.log(sum);

}

addnumbers(); //without arguments

// ex02: Building and calling functions
function addNumbers(num1, num2) {

    var sum = num1 + num2;
    console.log(sum);

}

addNumbers(10, 20); //with arguments
addNumbers(30, 40); //with arguments

// ex03: Building and calling functions
var colors = ["red", "blue", "green", "yellow", "orange"];

function displayColors() {

    for (var i = 0; i < colors.length; i++) {

        console.log(colors[i]);

    }

}

displayColors(); 