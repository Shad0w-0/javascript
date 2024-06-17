//********functions************ */
//basic function

function sayname(){
    console.log("s");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
}

// sayname()//calling the function


//add function
// function add(num1,num2)//parameters
// {
//     console.log(num1+num2);
// }

// add(2,3)//arguments

//other way
function add(num1,num2)//parameters
{
//    let result= num1 + num2
//    return result

//can be done this way also
    return num1+num2

}

const result=add(2,3)
// console.log("result",result);

//example

function loginuser(username = "sahil"){//if username doest pass anything u can put a default also
    // if(username===undefined){ can be written this way
        if(!username){ //can be written this way also
            console.log("please enter username");
            return
    }
    return `${username} logged in`
}
// console.log(loginuser("sahil"))
// console.log(loginuser())//when nothing is passed


//rest operator ... its bundles everything and given together

// function calculatecartprice(...num1)
// {
//     return num1
// }
// console.log(calculatecartprice(200,300,400));

function calculatecartprice(val1,val2,...num1)
{
    return num1
}
//console.log(calculatecartprice(200,300,400)); //op[ 400 ] //in this cade the val1 store 200 and val2 stores 300


//using objects in functions

const username={
    name:"sahil",
    rollno:"12"
}

// function handleobj(anyobj)
// {
//     console.log(`user name is ${anyobj.name} and rolno is ${anyobj.rollno}`);
// }

// handleobj(username)
//can be done this way also by passing direct object
// handleobj({
//     name:"sahil",
//     rollno:12
// })

//using arrays in function
 
const uname=["sahil",100,200]

function handleobj1(anyarr){
    // console.log(`user name is ${anyarr[0]} and rolno is ${anyarr[1]}`);
    //can be done this way also
    return anyarr[1]
}
// handleobj1(uname)
// console.log(handleobj1(uname))

//can be don this way also
console.log(handleobj1([100,200,300]))





