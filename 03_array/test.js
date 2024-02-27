// arrays

const a1=[1,2,3,4,5];
const Superhero=["Tony Stark","Captain Marvel","Thor","Black Widow"]
const a2=new Array(1,2,3,4,5);

console.log(a1[4]);
console.log(Superhero[1]);
console.log(a2[2]);


// methods in array 

// array.push(6) to add to the last 
a1.push(6);
console.log(a1);
// array.pop() to remove the value from the last 
a1.pop();
console.log(a1);
// array.unshift(7) to add at the starting
a1.unshift(7);
console.log(a1);
// array.shift(9) to remove value from the start
a1.shift();
console.log(a1);

console.log(a1.includes(9)); //  9 is not present in the array 

console.log(a1.indexOf(9)); // -1 is the answer and gives the index of the value




