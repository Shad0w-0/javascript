//********************Numbers*******************

// const num = 100
// console.log(num);

// const num1 = new Number(200.98)
// console.log(num1);

// console.log(num1.toString().length);
// console.log(typeof num1);
// console.log(num1.toFixed(1));


// //precision
// const numb= 123.856
// console.log(numb.toPrecision(3))

// //locale string
// const hundreds=10000000
// console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000

//*****************Maths*******************

// console.log(Math)
// console.log(Math.abs(-4)); //used to make all -ve value +ve
// console.log(Math.round(4.6));//used to roundoff number
// console.log(Math.ceil(4.2));//if its greater then 4 by .1 also then its rounds it off
// console.log(Math.floor(4.2));//takes the lowest value
// console.log(Math.min(4,3,2,1));//retun the lowest number
// console.log(Math.max(9,4,2,4,5));//return the highest number

console.log(Math.random())//value always between 0 and 1

console.log(Math.floor(Math.random()*10)+1); // to get 1 digit number plus to avoid any problems
//+1 is done to avoid 0 case
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+ min) // formula is important if you want to find random betwween 2 given number
