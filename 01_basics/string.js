const name = "Sahil"
const age = 50
// console.log("my name is "+ name + " and i am "+ age+ " years old"); this is the old fashioned way and not reccomended

// console.log(`hello my name is ${name} and i am ${age} years old`); //right way of writing

const gamename = new String("Sh-ad-ow")
// console.log(gamename[0]);
// console.log(gamename.__proto__);

//string methods in js
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('h'));
// const newstring = gamename.substring(0,4)

//slicing
// console.log(newstring);
// const newstr = gamename.slice(1,-4)
// console.log(newstr);

//trim
// const newstr1 = "     sahil    "
// console.log(newstr1);
// console.log(newstr1.trim());

//Replace
const url= "sahil^gmail.com"
console.log(url.replace('^','@'));

//to find if the the given url consist the keywoed
console.log(url.includes("sahil"));

//to split a string into array
console.log(gamename.split("-"));//it got spilited into array on bases of -