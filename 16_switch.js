/*
Syntax of switch statement in JavaScript:

switch(expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
*/

// Example:
const fruit = "apple";

switch(fruit){
    case "ball":
        console.log("This is an apple");
        break;
    case "banana":
        console.log("This is a banana");
        break;
    case "grapes":
        console.log("This is grapes");
        break;
    case "orange":
        console.log("This is orange");
        break;
    default:
        console.log("fruit not found");
}