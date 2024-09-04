class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}

new Train();

/*
this keyword is the future object object instance of the Train class
*/

//This code allows me to build new instances of the Train class.
//Each object instance of the Train class that I build will have its own custom properties of color and lightsOn.

//Inside the parentheses, you need to pass values such as "red" and false, for example, meaning that the color property is set to "red" and false, for example, meaning that the color property is set to "red" and lightsOn property is se to false.

var myFirstTrain = new Train('red', false);

console.log(myFirstTrain);

var mySecondTrain = new Train('blue', false);
var myThirdTrain= new Train('blue', false);