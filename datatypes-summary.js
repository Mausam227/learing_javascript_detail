// Primitive
// 7 types: string, number, bigint, boolean, undefined, symbol, null

const Id = Symbol("1234");
const nameId = Symbol("1234");
// console.log(Id === nameId); // false

// Non-primitive/Reference

// Objects, Arrays, Functions, Dates, etc.

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "mausam",
    age: 22,
    isMarried: false
}

const myFunction = function() {
    console.log("hello world");

}
 console.log(typeof myFunction); // function


 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack(primitive), Heap(Non-primitive)

 let myYoutubename = "mausamkuamrsah";
 let anothername = myYoutubename;
 anothername = "chai aur biscuit"
 console.log(anothername);

 let userOne = {
    email: "user@gamil.com",
    upi: "user@okaxis"
 }

 let userTwo = userOne;

 userTwo.email = "mausam@google.com"
 console.log(userOne.email); //