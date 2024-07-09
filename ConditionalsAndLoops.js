var place;

for (place = 1; place <= 10; place++) {

    if(place == 1) {

        console.log("Gold Medal");

    } else if (place == 2) {

        console.log("Silver Medal");

    } else if (place == 3) {

        console.log("Bronze Medal");
        

    } else {

        console.log(place);

    }  
    
}


switch(place) {

    case 1:
        console.log("Gold Medal");
        break;

    case 2:
        console.log("Silver Medal");
        break;

    case 3:
        console.log("Bronze Medal");
        break;

    default:
        console.log(place);
        break;

}