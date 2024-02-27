// how to copy refernce value 

// var a=[1,2,3,4,5];
// var b=[...a];  // this is spread operator 

// console.log(a)
// console.log(b)

// b.pop();

// console.log(a)
// console.log(b)


// in object 

// let obj={name:"Aman"}

// let copyObj={...obj};

// console.log(obj);
// console.log(copyObj);

// copyObj.name="Suraj";

// console.log(obj);
// console.log(copyObj);



// anything written in js is belong to any of the value which are truthy and falsy 

// falsy value are 0 , false , undefined , null , NaN, document.all  and after this all the value are truthy

// if(7){
//     console.log("truthy")
// }else{
//     console.log("falsy")
// }


// if(0){
//     console.log("truthy")
// }else{
//     console.log("falsy")
// }


// for each loop

// when we have array then we are going to use for each loop

// var a=[1,2,3,4,5];
// a.forEach(function(val){
//     console.log(val+2)
// })

// for in loop used in object 

// var obj={
//     name:"Aman",
//     age:24,
//     graduation:"Completed"
// }

// for (var key in obj){
//     console.log(key,obj[key]);
// }

// callback functions - A callback function can be defined as a function passed into another function as a parameter.


// console.log('Start')

// setTimeout( function(){
//   console.log('We are in the setTimeout()')
// }, 4000)

// console.log('End')


// first class fn in js is a concept where you can use function as a value

var b=function c(){
    console.log("c");

}
b()

function fn(a){
    a();
}

fn(function f(){console.log("First class fn")});

