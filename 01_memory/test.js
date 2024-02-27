//memory in js 
// two types - Heap memory for non primitive data types and stack memory for primitive datatypes 


// stack memory by value 
let name1="aman"
let name2=name1;

console.log(name1);
console.log(name2);

// change the value of name2 

name2="Suraj";

console.log(name1);
console.log(name2);

// Heap memory for non primitive datatypes by reference 

let user1={
    name:"Aman",
    email:"aman2712001@gmail.com"
}

let user2=user1;

console.log(user1.email);
console.log(user2.email);

user2.email="aman2791999@gmail.com"

console.log(user1.email);
console.log(user2.email);