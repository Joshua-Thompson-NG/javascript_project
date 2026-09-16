// GUESSING GAME
const guessBtn = document.getElementById('guess-btn');
const guessResult = document.getElementById('guess-result');
const guessInput = document.getElementById('guess-input');
const reloadBtn = document.getElementById('reload-btn');
const minVal = document.getElementById('min-val');
const maxVal = document.getElementById('max-val');

const MIN = 1;
const MAX = 10;
let turnsLeft = 5;

minVal.textContent = MIN;
maxVal.textContent = MAX;

const randomNum = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
console.log(randomNum);

guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    // Validate input is a number
    if (isNaN(userGuess)) {
        guessResult.textContent = "Please enter a valid number";
        guessResult.style.color = "red";
        return;
    }


    if (userGuess > MAX || userGuess < MIN) {
        guessResult.textContent = `Please enter a number between ${MIN} and ${MAX}`;
        guessResult.style.color = "red";
        return;
    }

    // Check the guess
    if (userGuess === randomNum) {
        guessResult.textContent = "Congratulations! You guessed the correct number!";
        guessResult.style.color = "green";
        endGame();
    } else {
        turnsLeft--; // Decrement turn immediately on a wrong guess

        if (turnsLeft === 0) {
            guessResult.textContent = "Game Over! The correct number was " + randomNum;
            guessResult.style.color = "red";
            endGame();
        } else if (userGuess > randomNum) {
            guessResult.textContent = `Too high! Try again. (${turnsLeft} turns left)`;
            guessResult.style.color = "orange";
            guessInput.value = "";
        } else {
            guessResult.textContent = `Too low! Try again. (${turnsLeft} turns left)`;
            guessResult.style.color = "orange";
            guessInput.value = "";
        }
    }
});

function endGame() {
    guessInput.classList.add("hidden");
    guessBtn.classList.add("hidden");
    reloadBtn.classList.remove("hidden");
}

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});

guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') guessBtn.click();
});
