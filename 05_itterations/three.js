//for of
//array

const arr=[1,2,3,4,5]
 for (const num of arr) {
   // console.log(num);
 } //op- 1 2 3 4 5

let greeting="hello"
for (const greet of greeting) {
    //console.log(greet);
} //op- h e l l o


//maps know for unique values

const map= new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERCIA")
map.set('FR',"FRANCE")
map.set('IN',"India")//does't repeat in a map

//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ":-",value );
}

// op
// IN :- India
// USA :- UNITED STATES OF AMERCIA
// FR :- FRANCE



// const myobj={
//     game1:"spiderman",
//     game2:"gta"
// }

// for (const [key,value] of myobj) {
//     console.log(key, ":-",value );
// }
//objects are not iterable using the for-of method


