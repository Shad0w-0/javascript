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
// const myarr=[0,1,2,3,4,5]

// console.log("A",myarr)
// const myn1 = myarr.slice(1,3) //op A [ 0, 1, 2, 3, 4, 5 ] slice [ 1, 2 ]

// console.log(myn1);

// console.log("B",myarr)
// const myn2 = myarr.splice(1,3)
// console.log(myn2);

// console.log("B",myarr)

//op B [ 0, 1, 2, 3, 4, 5 ] original array
// [ 1, 2, 3 ] after splice
// B [ 0, 4, 5 ] origanl arraay after operation




//**********arrays part 2 ***********//

const marvel=["thor","ironman","spiderman"]
const dc=["superman","batman","flash"]

// marvel.push(dc)//but this methods treats the whole array as jsut one object 
// console.log(marvel);
// console.log(marvel[3][0]);// so if you need to access dc in marvel u need to use this

//better way is use concate
//this combine both the arrays into one op [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// const allheros=marvel.concat(dc)
// console.log(allheros)


//spread method used to seprate all the elements

// const allheros=[...marvel,...dc]
// console.log(allheros);


//using flat- return a new sub array concatenated into it recursively upto the specific depth

// const onearr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realonearr=onearr.flat(Infinity)
// console.log(realonearr);
// op [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

//to check if the given input is a array or no op false

// console.log(Array.isArray("sahil"))

// //from method create a array from arrray like abject
// //to convert to array op [ 's', 'a', 'h', 'i', 'l' ]
// console.log(Array.from("sahil"))

// //to check after converting op true
// const val=Array.from("sahil")
// console.log(Array.isArray(val));


// console.log(Array.from({name:"sahil"}))//intresting case

//of method-return a new array from set of elements
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));