// let a=10//global scope

// if(true)
//     {
//         let a=20
//         const b = 20
//         console.log("Inner",a);
//         // var c=30//block scope //it is not available outside the scope
//     }

// console.log(a);
// console.log(b);
// console.log(c);//try to avoid using var


//nested scopes closure child can access parent variable

// function one(){
//     const username="sahil"
//     function two(){
//         const age="21"
//         console.log(age);
//     }
//     // console.log(age);//gives error bcz age is defined in the block scope so it cannt access it
//     two()
//     console.log(username);
// }
// one()


//example with if else

if (true){
    const username="sahil"
    if(username=="sahil"){
        const website=" youtube"
        //console.log(username +  website);
    }
    // console.log(website);//gives error over hear bcz website is defined in block scoope so cant access
}

// console.log(username);//gives error bcz username is defined in the block scope so cant access


//example on hosting like using diff ways to declare a function
console.log(addone(2))

function addone(num)//this way u can call the function from anywhere
{
    return num + 1
}

// console.log(addtwo(4));//calling it before eill give a error

const addtwo= function(num)//this way you need to call the function after this function or else it wont execut bcz its getting stored in the varible
{
    return num + 2
}

