# Number Guessing Game

A simple command-line game where you try to guess a random number between 1 and 100.

## Requirements

- [Node.js](https://nodejs.org/) installed on your computer

## How to Run

Open a terminal in this folder and run:

```bash
node example.js
```

## How to Play

1. The game picks a secret number between **1** and **100**.
2. Type your guess and press **Enter**.
3. The game tells you if your guess is **too low**, **too high**, or **correct**.
4. Keep guessing until you find the number.
5. When you win, the game shows how many tries it took.

Type `quit` at any time to exit and reveal the answer.

## Rules

- Only whole numbers are accepted.
- Invalid input (letters, decimals, empty lines) does not count as a try—you'll be asked to guess again.
- Each valid guess counts as one attempt.

## Example

```
I'm thinking of a number between 1 and 100.
Type your guess and press Enter. Type 'quit' to exit.

Your guess: 50
Too low! Try again.

Your guess: 75
Too high! Try again.

Your guess: 63
Correct! You got it in 3 tries.
```

## Tips

- Start in the middle (around 50) and narrow the range based on the hints.
- With binary search, you can usually find the number in about 7 guesses or fewer.
