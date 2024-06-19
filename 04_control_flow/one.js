//if statement
// const temp=51
// if (temp<50)
//     {
//         console.log("less then 50");
//     }
//     else{
//         console.log("more then 50");
//     }


// comparision operators <,>,<=,>=,==,!=,===

//scope in if statement

// const score=100
// if(score<200)
//     {
//         const pow="fly"
//         console.log(`user power: ${pow}`);
//     }
//     console.log(`user power: ${pow}`);//if its defined outside it will give error



//shortend notation
// balance=1000
// // if(balance>500) console.log("rich")

// //else if statements
// if (balance<500)
//     {
//         console.log("less then 500");
//     }else if (balance < 750) {
//         console.log("less then 750");
//     }else if (balance < 1000) {
//         console.log("less then 1000");
//     }else if (balance < 1200) {
//         console.log("less then 1200");
//     }


//checking multiple conditions

const userloggedin = true
const debit=true
const logingoogle=false
const loginemail=true

//and condition
if (userloggedin && debit)
    {
        console.log("user is logged in");
    }
    else{
        console.log("not allowed");
    }


    //or condition
    if(logingoogle||loginemail){
        {
            console.log("user is logged in");
        }
    }

