/*These are the best comparisons*/ 
console.log(2 == 2)  
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(2 != 1);  

//These are the problemetic auto convert comparisons
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0)
console.log(null == 0);//here null is an empty space
console.log(null >= 0);//but here null is converted automatically by js in a number.

// comparison operators like '==' and other operators like '<=', '>=', '>', '<' work slightly differently in js perspective of working and logics.

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0); // for all these three types of operations it will show Null because and because undefined if converted to number then it is also undefined.

// === it is called strict check which checks the each and every datatypes while comparing.

console.log("2" === 2); // shows false! because datatypes are not same.


