const accountId = 14453
let accountEmail = "astik@google.com"
/*
NEVER EVER use "VAR" keyword its evil and bokachoda!!(block scope and functional scope issue) :) use instead LET keyword.
*/
var accountPassword = ""
accountCity = "Dgp" //its also variable declaration type but prefer not to use

// accountId = 2 // not allowed because its defined as constant but we are giving variable value

accountEmail = "ag@gmail.com"
accountPassword = "123"
accountCity = "Mumbai"
let accountState
console.log(accountId,accountEmail,accountPassword,accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);