const snapuser = new Object()

// console.log(snapuser);

snapuser.name = "Astik"
snapuser.age = 18
snapuser.email = "astik@google.com"
snapuser.isLoggedIn = false

// console.log(snapuser);

const user2 = {
    name: "Arya",
    fullname:{
        userFullName:{
            firstName: "Arya",
            lastName: "Goswami"
        }
    }
}

// console.log(user2.fullname.userFullName.firstName);

//combining two objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const opObj = Object.assign({},obj1, obj2) // empty set ensures target will acomplish and all others act as sources.
const combObj = {...obj1, ...obj2} //const all_new_heros = [...marvel_heros, ...dc_heros] like arrays.

// console.log(combObj);
// console.log(opObj);
// console.log(...obj1[1],...obj1[2],...obj2[3],...obj2[4]);

const user = [
    {
        name: "astik",
        age: 18
    },
    {
        name: "ananda",
        age: 49
    },
    {
        name: "sampa",
        age: 41
    }
]

user[0].age

// console.log(snapuser);
console.log(Object.keys(snapuser));// shows the keys or variables in obj
console.log(Object.values(snapuser));//shows the keyvalues of obj
console.log(Object.entries(snapuser));// shows both ['keys' : 'values']

console.log(snapuser.hasOwnProperty('isLoggedIn'));









