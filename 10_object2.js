// const tenderUser = new Object();
const tenderUser = {}

tenderUser.id = "123abc"
tenderUser.name = 'john'
tenderUser.isLoggedIn = false

// console.log(tenderUser);

const regularUser = {
    email:"mausamkumar@gamil.com",
    fullname: {
        userFullname:  {
            firstName: "mausam",
            lastName: "sah"
    }
}
}

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b" }
const obj4 = {5:"a", 6:"b" }
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [{
    id:1,
    email:"mausamkuamr@gmail.com"
},{
    id:2,
    email:"sah@gmail.com"
},{
    id:3,
    email:"saruk@gmail.com"
}]

// console.log(Object.keys(tenderUser));
// console.log(Object.values(tenderUser));
// console.log(Object.entries(tenderUser));

// console.log(tenderUser.hasOwnProperty("isLoggedIn"));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstruction: "mausam"
}

const {courseInstruction} = course
console.log(courseInstruction); //undefined

// {
//     name: "mausam",
//     coursename: "js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {}
]