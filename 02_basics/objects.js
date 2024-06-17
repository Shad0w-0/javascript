//*************objects part 1****************//

//Object.create obj can be created this way also

//creating symbol
const mysyl=Symbol("key1")


//object literals

const jsuser={
    name:"sahil",
    "full name":"sahil shetker",//can be done this way also
    [mysyl]:"mykey1",
    age:21,
    location:"goa",
    lastlogin:["moday","Saturday"]
}//object


// access the object

// console.log(jsuser.name);
// console.log(jsuser["name"]);//this is more recommended
// console.log(jsuser["full name"])
// console.log(jsuser[mysyl]);

// //change object details

// jsuser.name="utkarsh"
// console.log(jsuser.name);

// //to avoid changes you can use freeze

// Object.freeze(jsuser)
// jsuser.name="superman"//no changes will occure as the object is freezed
// console.log(jsuser);

//function in js
jsuser.greeting=function(){
    console.log(`hello js user ${this.name}`);// this is used to reference object
}

// console.log(jsuser.greeting());//op hello js user sahil





//******************objects part 2*****************//


//singleton object*
// const fbuser = new Object()//this is a singleton object

const fbuser= {}
fbuser.name="sahil"
fbuser.id="sahil123"
fbuser.login=false

const insta={
    email:"sahilshetker@gmail.com",
    fullname:{
        username:{
            firstname:"sahil",
            lastname:"shetker"
        }
    }
}//nesting of the objects*

// console.log(insta.fullname.username.firstname);//accessing nested objects


//combine 2 object*
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3= {obj1,obj2}
// console.log(obj3);

//object.assign()-it is a static method copies all enumerable one or more sources object to the target object
// const obj3= Object.assign({},obj1,obj2)
// console.log(obj3);

//can be done this way also used most of the time
// const obj3={...obj1,...obj2}
// console.log(obj3);

//how data comes in 

const user=[
    {
        id:1,
        email:"some@gmail.com"
    },
    {
        id:2,
        email:"some1@gmail.com"
    },{
        id:3,
        email:"some2@gmail.com"
    }
]

// console.log(user[0].email);//op some@gmail.com

// console.log(fbuser);


// methods ue to get keys values of object
// console.log(Object.keys(fbuser)); //op-[ 'name', 'id', 'login' ]
// console.log(Object.values(fbuser));//op-[ 'sahil', 'sahil123', false ]
// console.log(Object.entries(fbuser)); //op [ [ 'name', 'sahil' ], [ 'id', 'sahil123' ], [ 'login', false ] ]

//to check if the object has property or not
// console.log(fbuser.hasOwnProperty('name'));


//***************objects part3*****************//

//destructuring

const course={
    cname:"js",
    cprice:"999",
    cinstruct:"sahil"
}

const{cprice: cpri}=course//destructuring
console.log(cpri);//this process is destructuring

//APIS IN JSON coming in object
// {
//     "name":"sahil",
//     "courename":"js",
//     "price":"700"
// }

//apis coming in array
// [
//     {},
//     {},
//     {}
// ]

