// const coding=["cpp","js","python","ruby","java"]

// const value= coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(value);//if youu do this way it doest return anything return undefined


// filter function Returns the elements of an array that meet the condition specified in a callback function.
const Mynum=[1,2,3,4,5,6,7,8,9,10]

//const newnum= num.filter((iteam)=> {iteam > 5})//in this line you obser i am getting a empy array back because i need to put return over there bcz i started a scope
//const newnum= num.filter((iteam)=> { return iteam > 5})//in this line you observe i am not getting a empty array back because i used return bcz its inside a scope
//console.log(newnum);
//op [ 6, 7, 8, 9, 10 ]



//can be done other way also but there you need to put some logic
//using foreach and a conditional if statement
const newnum=[]
Mynum.forEach((num)=> {
    if(num>5)
        {
            newnum.push(num)
        }
})
console.log(newnum);