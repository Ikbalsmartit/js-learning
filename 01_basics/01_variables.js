const accountID = "12345";
let accountEmail = "singbal786@gmail.com";
var accountPassword = "password123";
accountCity = "Punjab";
// accountID= "67890"; //not allowed, const cannot be reassigned
accountEmail = "ikbal.singh@gmail.com"; // allowed, let can be reassigned
accountPassword = "singh123"; // allowed, var can be reassigned
accountCity = "Delhi"; // allowed, no declaration keyword used
let accountState; // redeclaring with let is not allowed, will throw an error
console.log(typeof accountID);
console.table([accountEmail, accountPassword, accountCity, accountState]);