// to iterate an object

const lang = {
  "js" : "javascript",
  "cpp" : "C++",
  "swift": "Swift by apple"
}

// to iterate use FOR-IN loop

for (const [key,value] in lang) {
// console.log(key,':',value);
}

console.log();

// another way to print the values of the key with forin

for (const key in lang) {

  // console.log(`${key} : ${lang[key]}`);

}
console.log();


// *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
// ==========================================
// MAIN DIFFERENCE BETWEEN FOR-OF AND FOR-IN
// LOOP IS :-
// FOR-OF - PRINTS THE KEYS OF ARRAYS
// FOR-IN - PRINTS THE KEYS,VALUES OF OBJECTS
// ==========================================
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

// NOW IF WE IMPLEMENT FOR-IN ON ARRAYS

const prog = ["js", "cpp", "rb", "swift"]

for (const key in prog) {
// console.log(key); // will print the indexes of the array
// console.log(`${key} :- ${prog[key]}`);

} //also the array has to be treated as object in forin loop.
console.log();

// NOW REIMPLEMENTING THE MAP WITH FOR-IN LOOP:

const map = new Map()

map.set('a',1)
map.set("IN","India")
map.set('2',2)

for (const [key,value] in map) {
console.log(key,value); //will print nothing because in forin map is not iteratable.

}

