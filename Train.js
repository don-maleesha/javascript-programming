class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
        
    }

    //change the value stored in the lightsOn property of the future instance object of the Train class. 
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    //reports the current status of the lightsOn variable of a given object instace
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }

    //prins out the properties on the object instance it iscalled on. 
    getSelf(){
        console.log(this);
    }

    //console logs the prototype of the object instance of the Train class.
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }

}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain);

var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);

train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed on?', this.highSpeedOn);
    }

    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights();
train5.lightsStatus();
highSpeed1.toggleLights();

