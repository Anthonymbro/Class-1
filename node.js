let name=prompt("What is your name?")
alert("Welcome "+name+"!")

let correctAnswers = 0;

let place = prompt("Do I come from Seattle?");
if (place.toLowerCase() === "yes") {
  alert("Correct");
  correctAnswers++;
} else {
  alert("Wrong answer");
}

let age = prompt("Am I 31 years old?");
if (age.toLowerCase() === "yes") {
  alert("Correct");
  correctAnswers++;
} else {
  alert("Wrong answer");
}

let food = prompt("Is my favorite food Ramen?");
if (food.toLowerCase() === "yes") {
  alert("Correct");
  correctAnswers++;
} else {
  alert("Wrong answer");
}

let job = prompt("Was I ever a fisherman?");
if (job.toLowerCase() === "yes") {
  alert("Correct");
  correctAnswers++;
} else {
  alert("Wrong answer");
}

let school = prompt("Did I go to school?");
if (school.toLowerCase() === "yes") {
  alert("Correct");
  correctAnswers++;
} else {
  alert("Wrong answer");
}

alert("Thank you for playing!");

alert("Hold on. I've got two more questions for you. For this one, you only have four tries to guess the correct answer.");


function guessNum() {
  const correctNum = 7;
  const maxAttempts = 4;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const guess = parseInt(prompt('Guess a number between 1 and 10:'));

    if (guess === correctNum) {
      alert("Congratulations! You have guessed the right number!");
      correctAnswers++;
      break;
    } else if (guess > correctNum) {
      alert("Too high!");
    } else if (guess < correctNum) {
      alert("Too low.");
    }

    if (attempt === maxAttempts) {
      alert("Incorrect. The correct answer was 7.");
    }
  }
}

guessNum();


function guessFavoriteFood() {
  let attempts = 6;
  let correctAnswer = false;

  alert("Last question! Guess my favorite food from this list:\n1: fish tacos\n2: a lamp\n3. huckleberry finn\n4: pizza\n5: sushi\n6: hamburger\n7: pasta\n8: tacos\n9: ramen\nYou have 6 chances to get the right answer this time.");

  while (attempts > 0 && !correctAnswer) {
    let userGuess = prompt("You have " + attempts + " attempt(s) remaining. Enter your guess:");

    if (userGuess.toLowerCase() === "ramen") {
      correctAnswer = true;
      break;
    }

    attempts--;
    alert("Incorrect guess. Try again!");
  }

  if (correctAnswer) {
    alert("Congratulations! You guessed correctly. My favorite food is ramen!");
    correctAnswers++;
  } else {
    alert("Oops! You ran out of attempts. My favorite food is pizza.");
  }
}

guessFavoriteFood();

alert("Your final score is: " + correctAnswers + " out of 7 questions, "+name+".");
