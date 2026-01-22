// basics logic of js 
// sum of two integer ans relation between integer and string

// let a = 10
// let b = "20"
// console.log(typeof (a+b)); // string called concatenation

// let a = 10
// let b = 20
// console.log("sum of a and b is" +a+b);
// // output - sum of a and b is1020 bcoz in simple a+b +c so sabse pehle to sum of a and b concatenate hoga a ke sath fir concatenate hoga b ke sath
// console.log("sum of a and b is " +(a+b)); // output is 30


// type coercion

// console.log("1"+1); // 11
// console.log("1"-1); // 0 why?
// console.log("1"*1); // 1
// console.log("1"/1); // 1

// ans is + operator has two work i.e to add or to concatenate. other side * , -, / operator has only one work i.e substract , multiply or divide so compiler does that

// get an value from user 

const prompt = require("prompt-sync")(); // import this for get an values from user


let age  = prompt("enter your age -") // typeof output is string so we convert it into number using Number()
age = Number(age) // called type casting or type conversion
console.log(age);




