var assistantManager = {

    // properties
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streestSmarts: 30,
    health: 40,
    specialAbility: "young and energetic",
    greeting: "Hello, how can I help you?",
}

console.log(assistantManager); // { rangeTilesPerTurn: 3, socialSkills: 30, streestSmarts: 30, health: 40, specialAbility: 'young and energetic', greeting: 'Hello, how can I help you?' }

console.log(assistantManager.rangeTilesPerTurn); // 3

var house = {}; // empty object

house.bedrooms = 3;
house.bathrooms = 2;
house.kitchen = 1;
house.livingRoom = 1;

console.log(house); // { bedrooms: 3, bathrooms: 2, kitchen: 1, livingRoom: 1 }

console.log(house.bedrooms); // 3

var car = {};

car["make"] = "Toyota";
car["model"] = "Camry";
car["year"] = 2015;

console.log(car); // { make: 'Toyota', model: 'Camry', year: 2015 }
