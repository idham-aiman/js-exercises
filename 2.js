// Print odd numbers less than 100

// for (let i = 1; i < 100; i += 2){
//     console.log(i);
// }

// let description = "";
// let person = {fname:"Paul", lname:"Ken", age:18};
// for (let x in person){
//     // console.log(person[x]);
//     description += person[x] + "";
// } // description = 'Paul Ken 18 '

// console.log(person["fname"]);
let description = "";
let person = {fname: "Paul", lname: "Ken", age: 18};
for (let x in person) { // x is the key! -> x = fname = lname = age
    // console.log(x)
    // console.log(person[x]);
    // console.log(`${x}: ${person[x]}`)
    // console.log(`${person[x]} is ${typeof person[x]}`)

    description += `${person[x]} `; // == description += person[x] + "";
}

console.log(description)

