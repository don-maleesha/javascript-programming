const car = {
    engine : true
}

const sportsCar = Object.create(car);

sportsCar.speed = "fast";

console.log("The sportsCar object: ", sportsCar);

//for in loop to iterate over the properties of the sportsCar object
for(prop in sportsCar){
    console.log(prop);
}

//for of loop to iterate over the properties of the sportsCar object
for(prop of Object.keys(sportsCar)){
    console.log(prop + " : " + sportsCar[prop]);
}