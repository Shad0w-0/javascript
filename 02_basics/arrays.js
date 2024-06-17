// //*************arrays************/

// const myarr=[0,1,2,3,4,5]
// const myarr2=["sahil" ,"chitru" , "jp" , "shrikant", "pratik"]
// console.log(myarr2[0]); //op sahil

// //can be created this way also
// const arr = new Array(1,2,3,4,5)
// console.log(arr[0])

// //Array Methods
// //push

// myarr.push(6)
// console.log(myarr)

// //pop
// myarr.pop(6)
// console.log(myarr);

//unshift adds element at the start
// myarr.unshift(9)
// console.log(myarr);

// //shift removes the first elemnt that is added 
// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(3)); // checks if 3 is there or not int the array
// console.log(myarr.indexOf(3));// returns the index of the value

// const newarr = myarr.join()//adds all elements into a string

// console.log(newarr);
// console.log(typeof newarr)

// slice, splice
const myarr=[0,1,2,3,4,5]

console.log("A",myarr)
const myn1 = myarr.slice(1,3) //op A [ 0, 1, 2, 3, 4, 5 ] slice [ 1, 2 ]

console.log(myn1);

console.log("B",myarr)
const myn2 = myarr.splice(1,3)
console.log(myn2);

console.log("B",myarr)

//op B [ 0, 1, 2, 3, 4, 5 ] original array
// [ 1, 2, 3 ] after splice
// B [ 0, 4, 5 ] origanl arraay after operation