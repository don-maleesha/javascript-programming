var light;

if (light == "green") {

    console.log("Go!"); 
       
} else if (light == "yellow") {

    console.log("Caution!");
       
} else if (light == "red") {

    console.log("Stop!");
       
} else {

    console.log("Proceed with caution.");
       
}

switch (light) {

    case "green":
        console.log("Go!");
        break; 

    case "yellow": 
        console.log("Caution!");
        break;

    case "red":
        console.log("Stop!");
        break;
        
    default:
        console.log("Proceed with caution.");
        break;
}