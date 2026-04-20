/* Map in js are used to perform a function on a given array 
   Syntax: originalArray.map((currentValue, index, arr) => {
    // return element for newArray, after executing some operations on currentValue
})
   */

let initialArr = [1 , 2 , 3 , 4]
let squaredArr = initialArr.map((index) => { return index * index})

console.log("Intial Array is: " , initialArr)
console.log("Squared Array is: " , squaredArr)