var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){
    for(let item of dairy){
        console.log(item);
    }
}

logDairy();

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const [key, value] of Object.entries(bird)) {
        if (bird.hasOwnProperty(key)) {
            console.log(`${key}: ${value}`);
        }
    }
}

birdCan();

function animalCan(){
    for(const key in bird){
        console.log(`${key}: ${bird[key]}`);
    }
}

animalCan();


