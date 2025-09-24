const accountId = 144566
let accountEmail = "hero@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; // undefined

// accountId = 2 // not allowed

accountEmail = "mausam@gamil.com"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
Prefer not to use var because of issue in block issue and functional scope
*/