// valid voter
const prompt = require("prompt-sync")();

let age = Number(prompt("What is Your Age?"));
if (isNaN(age)) {
    console.log("wrong input");
}
else if (age>=18) {
    console.log("You are Eligible For Voting");
} else{
    console.log("You are Not Eligible for Vote");   
}