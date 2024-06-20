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
// const newnum=[]
// Mynum.forEach((num)=> {
//     if(num>5)
//         {
//             newnum.push(num)
//         }
// })
// console.log(newnum);

const books = [
    {title: 'BOOK one',genre:'Friction',publish:1981,edition: 2004},
    {title: 'BOOK two',genre:'Non-Friction',publish:1992,edition: 2008},
    {title: 'BOOK three',genre:'history',publish:1999,edition: 2007},
    {title: 'BOOK four',genre:'Non-Friction',publish:1989,edition: 2010},
    {title: 'BOOK five',genre:'science',publish:2009,edition: 2014},
    {title: 'BOOK six',genre:'Friction',publish:1987,edition: 2010},
    {title: 'BOOK seven',genre:'history',publish:1986,edition: 1996},
    {title: 'BOOK eight',genre:'Science',publish:2011,edition: 2016},
];

// const userBooks= books.filter((bk) => bk.genre==='history')

// console.log(userBooks);

// op
// [
//     {
//       title: 'BOOK three',
//       genre: 'history',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'BOOK seven',
//       genre: 'history',
//       publish: 1986,
//       edition: 1996
//     }
//   ]
const userBooks= books.filter((bk) =>  bk.publish >=1995 || bk.genre==="history")
console.log(userBooks);

// op
// [
//     {
//       title: 'BOOK five',
//       genre: 'science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'BOOK eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]

//can also use && operatin or ||