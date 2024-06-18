//this keyword used to refer current context

const user={
    username:"sahil",
    pas:"sa123",

welcome: function(){
    console.log(`${this.username},welcome to the website`);
    console.log(this);
}

}
// user.welcome()//op-sahil,welcome to the website
// // console.log(user.welcome());
// user.username="utkarsh"
// user.welcome() //op-utkarsh,welcome to the website

//console.log(this);

//in browser there is window object


function coffeee()
{
        let username="sahil"
    console.log(this.username);//this function works in objects and not inside a function
}


// coffeee() inthis case also op was undefined

// const chai= function()
// {
//     let username="sahil"
//     console.log(this.username);
// }

// chai() op- undefined


// const chai= () =>
// {
//     let username="sahil"
//     console.log(this.username);
// }

// chai()//still the output is undefined


//arrow function basic syntax () => {} also its explicitly return
    //basic arrrow fuction

    // const addtwo= (num1,num2) => {
    //     return num1 + num2
    // }



//implicite return method
        // const addtwo= (num1,num2) =>  num1 + num2

//to return object

    const addtwo= (num1,num2) =>({username: "sahil"})
    console.log(addtwo(2,3));

