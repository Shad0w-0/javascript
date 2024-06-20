//map function
// syntax mynum.map(() => {})

//const mynum=[1,2,3,4,5,6,7,8,9,10]
//const newnum= mynum.map((num)=> num+10)
//console.log(newnum);

// op
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]


//chaining
//const newnum= mynum.map((num) => num *10).map((num) => num+1).filter((num) => num >=40)
//console.log(newnum);

// op
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//  
//]


//using filter
// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]


//***********************REDUCE()**************** */

//syntax
//const arr=[1,2,3]
//const initialvalue=0;
//const total= arr.reduce((accumulator,currentvalue) => accumulator + currentvalue,initialvalue);




 const mynum=[1,2,3]
// const total= mynum.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and current value ${currval}`);
//     return acc + currval
// },0)

// console.log(total);


// op 
// acc: 0 and current value 1
// acc: 1 and current value 2
// acc: 3 and current value 3
// 6


//writing i the form of arrow function

// const total= mynum.reduce((acc,curr)=> acc+curr,0)
// console.log(total);
// op-6


// example

const shopingcart=[
    {
        course:"js cource",
        price:2000
    },
    {
        course:"py cource",
        price:1000
    },
    {
        course:"db cource",
        price:3000
    },
    {
        course:"ds cource",
        price:5000
    },
]

const total= shopingcart.reduce((acc,iteam) => acc + iteam.price,0)
console.log(total);
