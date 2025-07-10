// go through 100 numbers and check which ones are divisible by 3 alone and which ones are divisible by 3 and 5 at the same time 

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} and FizzBuzz`);
    } else if(i % 3 ===0){
        console.log(`${i} and Fizz`);
    }
}
