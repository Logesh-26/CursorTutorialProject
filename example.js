const readline = require("readline");

const MIN = 1;
const MAX = 100;
const secret = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let attempts = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`I'm thinking of a number between ${MIN} and ${MAX}.`);
console.log("Type your guess and press Enter. Type 'quit' to exit.\n");

function ask() {
  rl.question("Your guess: ", (answer) => {
    if (answer.trim().toLowerCase() === "quit") {
      console.log(`Game over. The number was ${secret}.`);
      rl.close();
      return;
    }

    const guess = Number(answer);

    if (!Number.isInteger(guess)) {
      console.log("Please enter a whole number.\n");
      ask();
      return;
    }

    attempts++;

    if (guess < secret) {
      console.log("Too low! Try again.\n");
      ask();
    } else if (guess > secret) {
      console.log("Too high! Try again.\n");
      ask();
    } else {
      console.log(`Correct! You got it in ${attempts} ${attempts === 1 ? "try" : "tries"}.`);
      rl.close();
    }
  });
}

ask();
