//a for of loop cannot work on an object directly, since an object is not iterable. 

/*
const car = {
    speed : 100,
    color: "blues"
}

for(prop of car){
    console.log(prop);
}
*/

//Uncaught TypeError: car is not iterable

//Contrary to objects, arrays are iterable. For example:  

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

//The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.

const car = {
    speed : 100,
    color: "red"
}

console.log(Object.keys(car));

//The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

console.log(Object.values(car));

//The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

console.log(Object.entries(car));


var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

//bracket notation is used to access the value of the key
for(const key of Object.keys(clothingItem)){
    console.log(key, ":", clothingItem[key]);
}


function testBracketsDynamicAccess() {
    var dynamicKey;

    if(Math.random() > 0.5){
        dynamicKey = 'speed';
    } else {
        dynamicKey = 'color';
    }

    var drone = {
        speed: 100,
        color: 'blue'
    }

    console.log(drone[dynamicKey]);

}

testBracketsDynamicAccess();