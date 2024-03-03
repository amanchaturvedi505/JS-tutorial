// higher order function are the function which accept functions in a parameter or return a fnction 


// 1 ways is this 
// function abcd(val){

// }
// abcd(function a(){});


// 2nd ways is 

// function abc(){
//     return function b(){}
// }
// abc()

// where do we use higher order functions - in closure 

// what is constructor fn - constructor fn is a fn which has this keyword and has new in it 

// function biscuit(){
//     this.taste="Sugary";
//     this.color="Brown";
// }

// var bis1=new biscuit();
// console.log(bis1);
// var bis2=new biscuit()
// console.log(bis2);

// when we have to make n number of element with same properties then we use constructor fn

// function song(name,singer,lyricist){
//     this.name=name;
//     this.singer=singer;
//     this.lyricist=lyricist;
    

// }

// // new keyword is something which will create a blank object and write all the things whic is in this keyword

// var animal=new song("satranga","arijit","pritam");
// console.log(animal);
// var lukaChuppi=new song("duniya","akhil","akhil")
// console.log(lukaChuppi);


// iife - immediate involked function expression 
// means iife is a fn which has to property to run immediately in a way such that we can create a private variable 

// function abcd(){
//     console.log(12)
// }

//this is normal fn 

// var ans=(function(){
//     var privateVal=12;
    
//     return {
//         getter:function(){
//             console.log(privateVal)
//         },
//         setter:function(){
//             privateVal=val;
//         }
//     }

// })()

// console.log(ans.getter())
// console.log(ans.setter(24))
// console.log(ans.getter())

// what is prototype - when we create an object in the browser then a prototype is automatically created which contain helper function to run task in the js 

// what is global scope - anything written outside of the {} then that variable is global scope 

// this value in different scope 

// this value in global and function scope is windoow 
// what is method - any function inside the object is called method 

var obj={
    name:"aman",
    func:function(){
        console.log("Aman");
    }
}

// this value in method scope is object 

// this keyword in event listener is the value which is added before addEventListener

// ex 

// var button=document.querySelector("button");
// button.addEventListener('click',function(){
//     console.log(this);
// })


// here button is the value of this because it is written before the addEventListener

// call in js

function a(){
    console.log(this)
}

var obj={age:24};

a.call(obj);

function b(v1,v2,v3){
    console.log(this,v1,v2,v3)
}

var obj={age:24};

b.call(obj,1,2,3);


// apply in js has only two parameter one is object and another is array 

function c(v1,v2,v3){
    console.log(this,v1,v2,v3)
}

var obj={age:24};

c.apply(obj,[1,2,3]);

// bind

function d(){
    console.log(this)
}

var obj={age:23};

var da=d.bind(obj); // this will bind the fn and the object and not uses at that time , but use for another time 

da();








