// valid voter
const prompt = require("prompt-sync")();

// let age = Number(prompt("What is Your Age?"));
// if (isNaN(age)) {
//     console.log("wrong input");
// }
// else if (age>=18) {
//     console.log("You are Eligible For Voting");
// } else{
//     console.log("You are Not Eligible for Vote");   
// }

// 2. Shop Discount
// we do not find the discount we want to find the payble amount

// let amount = Number(prompt("What is the final Amount?"));
// let dis = 0;
// if (amount<=2000) {
//     dis =0;
// } else if (amount>=2001 && amount<=4000) {
//     dis=10;
// } else if (amount>=4001 && amount<=9000) {
//     dis=15;
// } else if (amount>=10000) {
//     dis=25;
// } else{
//     console.log("Wrong Input");
// }

// console.log(amount -(Math.floor(dis*amount)/100));

// let unit = Number(prompt("Enter Electricity Unit")); // 700
// let amount = 0;

// if (unit>400) {
//     amount = (unit-400)*13; //3900
//     unit = 400
// }
// if (unit>200 && unit<=400) {
//     amount += (unit-200)*8; // 1600
//     unit =200 
// }
// if (unit>100 && unit<=200) {
//     amount += (unit-100)*6; // 600
//     unit = 100
// }
// amount += unit*4 ;
// console.log(amount);




// Inr denomination

// let amount = 1856 ;
// if (amount>=500) {
//     console.log("500 rupee notes: " + Math.floor(amount/500));
//     amount = amount % 500;
// }
// if (amount>=200) {
//     console.log("200 rupee notes: " + Math.floor(amount/200));
//     amount = amount % 200;
// }
// if (amount>=100) {
//     console.log("100 rupee notes: " + Math.floor(amount/100));
//     amount = amount % 100;
// }
// if (amount>=50) {
//     console.log("50 rupee notes: " + Math.floor(amount/50));
//     amount = amount % 50;
// }
// if (amount>=20) {
//     console.log("20 rupee notes: " + Math.floor(amount/20));
//     amount = amount % 20;
// }
// if (amount>=10) {
//     console.log("10 rupee notes: " + Math.floor(amount/10));
//     amount = amount % 10;
// }
// if (amount>=5) {
//     console.log("5 rupee notes: " + Math.floor(amount/5));
//     amount = amount % 5;
// }
// if (amount>=2) {
//     console.log("2 rupee notes: " + Math.floor(amount/2));
//     amount = amount % 2;
// }
// if (amount>=1) {
//     console.log("1 rupee notes: " + Math.floor(amount/1));
//     amount = amount % 1;
// }



// ternary operator ? :

// code ? true ka code : false ka code

// 112>24 ? console.log("huuhuuu"): console.log("heyeheyee");

// nested ternary operator

// let num =-18;
// console.log(num>0 ?"positive":num<0 ?"negative":"zero");

// switch case

// let day= 4;
// switch(day){
//     case 1: console.log("Sunday");
//     break;
//     case 2: console.log("Monday");
//     break;
//     default: console.log("Invalid Day");
// }


// let day= 2;
// switch(day){
//     case 1: 
//     case 2:
//     case 3:
//         console.log("Working Day");
//         break; 
//     default: console.log("Invalid Day");
// }

switch(true){
    case 112<24: console.log("huuhuuu");
    break;
    case 45>78: console.log("heyeheyee");
    break;
    default: console.log("no match");
}

let num = 0.1+0.2;
num = Number(num.toFixed(1));
switch(num){
    case 0.5: console.log("Its 0.5");
    break;
    case 0.3: console.log("Its 0.3");
    break;
    default: console.log("No Match");
}