/* 
to understand what polymorphism is about, let's consider some real-life objects.

A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. 
When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object.
This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same 
as ringing the bell on a door. */
const bicycle = {

    bell: function() {

        return "Ring, ring! watch out, please!";

    }
}

const door = {

    bell: function() {

        return "Ring, ring! Come here, please!";
    }
}

bicycle.bell(); // "Ring, ring! watch out, please!"
door.bell(); // "Ring, ring! Come here, please!"

//to male this code truly polumorphic,  add another fucntion declaration

function ringTheBell(thing) {

    console.log(thing.bell());
}

// thing parameter - this is the polymorphic part of the code
// the thing parameter is a placeholder for any object that has a bell method

//If call the ringTheBell() function and pass it the bicycle as ist single argument, here's the output:
ringTheBell(bicycle); // "Ring, ring! watch out, please!"

//if invoke the ringTheBell() function and pass it the door as its single argument, here's the output:
ringTheBell(door); // "Ring, ring! Come here, please!"