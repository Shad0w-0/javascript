//Immediately invoked function expressions(IIFE) due to polltion of globle scope we use it syntax for that is ()()

(function chai(){
    //name IIFE
    console.log(`db connected`)
})();//this is how it done //we add ; to end that function

//can be done this way also //unnamed IFFEE
// (() => {
//     console.log(`db connected`);
// })()

//can also take variable
((name) => {
    console.log(`db connected ${name}`);
})("success")

