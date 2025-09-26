//singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "mausam",
    [mySym]: "mykey123",
    "full name": "mausam kumar sah",
    age: 22,
    location: "dharan",
    email: "mausam@google.con",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

console.log(JsUser.age);

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "sahmausam.com"

JsUser.greetings = function(){
    console.log("hello js user");
}
JsUser.Twogreetings = function(){
    console.log(`hwllo ${this.name} welcome back!`);
}

console.log(JsUser.greetings())
console.log(JsUser.Twogreetings())
