
let arryy =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],   
    arryyNames =  ["Diana", "David", "Lilo", "Otto", "Gogu?"],   
    arryy2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],   
            //0  1  2  3  4  5  6  7  8  9   10  11  12  13  14
    trySlice = arryy.slice(5,8),
    tryToSpliced = arryy.toSpliced(5, 8, "Hello"),
    trySplice = arryy2.splice(5, 7, arryyNames.slice(1,3))
        
    

console.log(arryy) 
console.log("<--->")
console.log(trySlice)
console.log(tryToSpliced) 