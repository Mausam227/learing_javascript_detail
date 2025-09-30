

const userEmail = []
if(userEmail){
    console.log("TRUTHY VALUE");
}else{
    console.log("FALSY VALUE");
}

// FALSY VALUES

// false, 0, -0 , BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES
// "0", ''false', " ", [], {}, function(){}, new Date(), etc


// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??)
let val1;
// val1 = 12 ?? 10
// val1 = null ?? 10
console.log(val1);

//Terniary Operator

//condition ? expr1 : expr2

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
