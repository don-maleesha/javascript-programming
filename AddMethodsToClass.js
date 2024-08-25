class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

/*
The toggleLights method uses the logical not operator, !.
This operator will change the values stored in the lightsOn property of the future instance object of the Train class; hence the !this.lighsOn. 
And the = operator to its left means that it will get assigned to this.lightsOn, meaning that it will become the new value of the lightsOn property
on that given instance object.
*/

/*
The lightStatus() method on the Train class just reports the current status of lightsOn variable of a given object instance.
*/

/*
The getSelf() method prints out the properties on the object instance it is called on
*/

/*
The getPrototype() console logs the prototype of the object instance of the rain class.
The prototype hods all the properties shared by all the object instances of the Train class.
To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object-meaning, 
the object instance inside of which this method is invoked.
*/