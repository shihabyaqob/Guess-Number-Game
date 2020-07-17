let min = 1,
    max = 10,
    winningnum = getRandom(min, max),
    guessleft = 3;

const game = document.querySelector('#game'),
    minMun = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    massage = document.querySelector('.message');

minMun.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 10) {
        setMassage(`please inter a number between ${min} and ${max}`, ' red');
    }
    if (guess === winningnum) {
        gameOver(true, 'Correct ...!');
    } else {
        guessleft -= 1;
        if (guessleft == 0) {
            gameOver(false, 'Game Over...!');

        } else {
            setMassage(`${guess} Is not correct ...Try agin, ${guessleft} guesses left`, ' red');
            guessInput.value = '';
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = "green" : color = "red";
    setMassage(msg, color)
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMassage(msg, color) {
    massage.textContent = msg;
    massage.style.color = color;
}