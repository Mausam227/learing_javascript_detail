//array
const myArray = [0,1,2,3,4,5,true,"hello"];
const myHeros = ["shaktiman", "naagraj", "doga"];
const myArr = new Array(1,2,3,4);


//Array methods
//  myArr2.push(6);
//  myArr2.push(7);
//  myArr2.pop();

// myArr2.unshift(9);
// myArr2.shift();

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(4));

// const newArr = myArr2.join();
//  console.log(newArr);

//slice, splice

// console.log("A ",myArr);
// const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B ",myArr);

console.log("Before slice", myArr)
const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("After slice", myArr)
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("After splice", myArr)





