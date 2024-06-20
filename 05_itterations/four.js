//for-in Loop
//used for objects****
const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    py:"python"
}

for (const key in myobj) {
    //console.log(`${key} shotcut is for ${myobj[key]}`);
}

//lets do for array

const program=["cpp","js","py","rb","java"]
for (const key in program) {
    //console.log(program[key]);
}
//op 1 2 3 4 5 so if yoou use for in loop in array it gives the key and if you use the forof in array it gives values
//you can also get the value of the array by doing program[key]
//maps are not itterable


