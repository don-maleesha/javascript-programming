const car = {
    engine : true
}

const sports = Object.create(car);

sportsCar.speed = "fast";

console.log("The sportsCar object: ", sportsCar);

for(prop in sportsCar){
    console.log(prop);
}

for(prop of Object.keys(sportsCar)){
    console.log(prop + " : " + sportsCar[prop]);
}