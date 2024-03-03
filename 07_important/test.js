// Synchoronous js - execcuted line by line 

// console.log("Hey1");
// console.log("Hey2");
// console.log("Hey3");
// console.log("Hey4");

// Async js are settimeout,setInterval,etch,axios,xmlhttprequest,promises.

// console.log("Hey1");
// console.log("Hey2");
// setTimeout(function(){
//     console.log("hey3")
// },2000)
// console.log("Hey4");



// Promises - 2 states -> Resolve or reject . If resolve then use (then) , if not (catch)

// var p1=new Promise((res,rej)=>{
//         return res("Hey1");
// })

// var p2=p1.then(function(data){
//         console.log(data);
//         return new Promise((res,rej)=>{
//             return res("Hey2")
//         })
// })


// var p3=p2.then(function(data){
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res("Hey3")
//     })
// })
// var p4=p3.then(function(data){
//     console.log(data);
// })



var p1=new Promise((res,rej)=>{
    if(false){
        return res();
    }
    else{
        return rej();
    }
})

p1.then(function(){
    console.log("Hey1");
})
.catch(function(){
    console.log("hey2");
});

