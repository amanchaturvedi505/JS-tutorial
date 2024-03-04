// without using async and await function 


function abcd(){
    fetch(`https://randomuser.me/api/`)
    .then(function (raw){
        return raw.json();
    })
    .then(function (data){
        console.log(data);
    })
}

abcd();


// if we have make the promises easy to write and remove .then function , we use async await

async function abcde(){
    let raw=await fetch(`https://randomuser.me/api/`);
    let ans=await raw.json();
    console.log(ans);
}

abcde();