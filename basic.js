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

// const prompt = require("prompt-sync")(); // import this for get an values from user


// let age  = prompt("enter your age -") // typeof output is string so we convert it into number using Number()
// age = Number(age) // called type casting or type conversion
// console.log(age);




// swap variable via three methods

// 1. swap with extra variable

// let a = 10
// let b = 20
// let c; 
// c = a ; // c=10 and a=10
// a = b ; // a=20 and b=20
// b = c ; // b=10 

// console.log(a);
// console.log(b);
// console.log(c);

// 2. without using extra variable

// let a = 200
// let b = 50
// a = a+b ; // 250
// b = a-b ; // 200
// a = a-b ;
// console.log(a);
// console.log(b);

// 3. swap using destructring

// let a =20;
// let b =39;

// [a,b] = [b,a];
// console.log(a,b);



// opertor and their questions = 
// Arithmetic = +,-,*,/,%
// let a =90;
// let b=20 ;

// console.log(a/b); // 4.5
// console.log(Math.floor(a/b)); // 4
// console.log(a%b); // 10
// console.log(b%a); // 20

// let a = 4563
// let b,c ,d,e ;
// b = a % 10 ; // 3
// a = Math.floor(a/10);
// c = a % 10 ; // 6
// a = Math.floor(a/10);
// d = a % 10 ; // 5
// a = Math.floor(a/10);
// e = a%10 ; // 4
// a = Math.floor(a/10);

// console.log(b+c+d+e);

// relational operator <,>,<=,>=,!=

// logical operator && ||

// unary operator 
// ++ increment -- decrement

// let a =10;
// let b = ++a; // post increment
// console.log(a);
// console.log(b);

// let a= 11;
// a = a++ + ++a ;
// console.log(a);

// let x = true;
// x++
// console.log(x); // output is 2

// let z = 10
// z = ++(z++)
// console.log(z); // shows error bcoz z++ become 10 and ++10 is not valid






