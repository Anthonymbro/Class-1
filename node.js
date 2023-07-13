
// QUESTIONS
//2nd requirement in the lab
let username=prompt("What is your name?");
alert(`Welcome ${username}.`)



//1st requirement in the lab
let name = prompt("Do I come from Seattle?");
if (name.toLowerCase() == "yes"){
   // console.log("Correct");
   alert("Correct");
} else {
   // console.log("You are wrong.")
   alert("Wrong answer");
}


let age = prompt("Am I 31 years old?");
if (age.toLowerCase()=="yes"){
   // console.log("Correct");
   alert("Correct");
} else {
    //console.log("You are wrong");
    alert("Wrong answer");
}


let food = prompt("Is my favorite food Ramen?");
if (food.toLowerCase()=="yes"){
   // console.log("Correct");
   alert("Correct");
} else {
   // console.log("Wrong");
   alert("Wrong answer");
}


let job = prompt("Was I ever a fisherman?");
if (job.toLowerCase()=="yes"){
   // console.log("Correct");
   alert("Correct");
} else {
   // console.log("Wrong")
   alert("Wrong answer");
}


let school = prompt("Did I go to school?");
if (school.toLowerCase()=="yes"){
   // console.log("Correct");
   alert("Correct");
} else {
   // ("Wrong")
   alert("Wrong answer");
}

alert("Thank you for playing "+username)

alert("Hold on. I've got one more question for you. You only have four tries to guess what the correct answer is "+username);

const correctNum=7;
maxAttempts=4;

for(let attempt=1; attempt<=maxAttempts; attempt++){
const guess = parseInt(prompt('Guess a number between 1 and 10:'));

if (guess===correctNum){
   alert("Congratulations! You have guessed the right number!")
   break
} else if (guess>=correctNum){
   alert("Too high!");
} else if (guess<=correctNum){
   alert("Too low.")
} 
 if (attempt==maxAttempts){
   alert("You have lost the game. The correct answer was 7.")
 }
}

tony array=[0,1,2,3,4,5,6,7,8,9,10];