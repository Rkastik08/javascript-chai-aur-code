// 'for of' loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello world";

for (const greet of greetings) {
  // console.log(`Congratulations ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");

// console.log(map);

for (const [k, v] of map) {
  // console.log(k, ':-', v);
}


const Games = {
  game1 : "NFS",
  game2 : "GTA",
  game3: "RDR2"
}

// for (const [keys, values] of Games) {
//     console.log(keys, ":-", values);

// } is not workable in pure object
