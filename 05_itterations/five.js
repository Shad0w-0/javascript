//for-each loop

const program=["cpp","js","py","rb","java"]

// program.forEach(function(val){
//     console.log(val);
// })

//by aero function
//program.forEach((val) => {console.log(val);})


//can be done this way also
// function print(iteam)
// {
//     console.log(iteam);
// }
// program.forEach(print)

//for each has acces to iteam index and arrays so you can do anything

program.forEach((iteam,index,arr)=> {
    //console.log(iteam,index,arr);
})
//output
// cpp 0 [ 'cpp', 'js', 'py', 'rb', 'java' ]
// js 1 [ 'cpp', 'js', 'py', 'rb', 'java' ]
// py 2 [ 'cpp', 'js', 'py', 'rb', 'java' ]
// rb 3 [ 'cpp', 'js', 'py', 'rb', 'java' ]
// java 4 [ 'cpp', 'js', 'py', 'rb', 'java' ]

//objects inside arrrys
const cooding=[
    {
    programminglang:"javascript",
    programmingfile:"js"
},
    {
    programminglang:"java",
    programmingfile:"java"
},
    {
    programminglang:"python",
    programmingfile:"py"
}
]

cooding.forEach((iteam)=>{
    console.log(iteam.programminglang);
})
// output
// javascript
// java
// python