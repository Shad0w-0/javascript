//for loop
//syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   
// }

//eg 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==7){
        //console.log("thalla for a reason");
    }
    //console.log(element);
}


//eg tables from 1 to 10
for (let i = 0; i <=10 ; i++) {
    //console.log(`table of ${i}`)
    for (let j = 0; j <=10 ; j++) {
        //console.log(`${i} * ${j} = ${i*j}`);   
    }
}



//for arrray
let myarr=["flash","batman","superman"]

for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
   // console.log(element);
}


//break and continue
//break
for (let i = 1; i <=20; i++) {
    if(i==5){
        //console.log(`5 is detected`);
        break
    }
    //console.log(`value of i is ${i}`);  
    
}


//continue
for (let i = 1; i <=10; i++) {
    if(i==5){
        console.log(`5 is detected`);
        continue
    }
    console.log(`value of i is ${i}`);   
}
