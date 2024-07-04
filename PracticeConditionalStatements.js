var age = 10;

if (age >= 65) {

    console.log("get your income from your pension");

} else if(age >= 18 && age < 65) {

    console.log("get your income from your job");

} else if (age < 18) {

    console.log("you get an allowance");

} else {

    console.log("The value of the age variable is not valid.")

}


var day = "Sunday";

switch (day) {

    case "Monday":
        console.log("Today is Monday.");
        break;

    case "Tuesday":
        console.log("Today is Tuesday.");
        break;

    case "Wednesday":
        console.log("Today is Wednesday.");
        break;

    case "Thursday":
        console.log("Today is Thursday.");
        break;

    case "Friday":
        console.log("Today is Friday.");
        break;

    case "Saturday":
        console.log("Today is Saturday.");
        break;

        default:
        console.log("Today is Sunday.");
        break;

}