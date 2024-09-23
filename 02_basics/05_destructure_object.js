const course = {
    name: "JavaScript",
    price: 1000,
    rating: 4.5,
    students: 1000
}

const {students: stu,price: p,rating: r,students: s} = course //called object de-structuring

console.log(stu);
console.log(p);
console.log(r);
console.log(s);

//intro to API

{
    "name": "Astik Goswami",
    "courseName": "Javascript",
    "fees": "free"
} // this is a form of JSON file. in this (nameless object) Json keys and values both has to be a string.

//API can also be like this ==>

    [
        name ={
            title : "Mr",
            First: "Astik",
            Last : "Goswami"
        }
    ] //Array formatted APIs


    


