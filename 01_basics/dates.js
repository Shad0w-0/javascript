//dates

let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString());
// console.log(mydate.toISOString())
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString())

// console.log(typeof mydate);

// let mydate1= new Date(2023,12,23)
// console.log(mydate1.toString())

//coustom dates
// let mydate1= new Date("08-23-2003")
// console.log(mydate1.toLocaleString())


//timestamp

let mytimestamp = Date.now()
// console.log(mydate1.getTime());
// console.log(Date.now());

let newdate= new Date()
// console.log(newdate);
// console.log(newdate.getMonth()+1);

console.log(newdate.toLocaleString('default', { weekday:"long",}));  

