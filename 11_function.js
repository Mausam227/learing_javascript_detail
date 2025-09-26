


function sayMyName(){
console.log("M");
console.log("A");
console.log("U");
console.log("S");
console.log("A");
console.log("M");

}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(4,5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please entern a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("mausam"))

console.log(loginUserMessage())
console.log(loginUserMessage("mausam"))


function calculateCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500,2000))

const user = {
    username: "mausam",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sah",
    price: 299
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000,2000,3000,4000]));