const playerOne = document.querySelector('#player_one');
const playerTwo = document.querySelector('#player_two');
const reset_score = document.querySelector('#reset');
const player_one_scores = document.querySelector('#player_one_score');
const player_two_scores = document.querySelector('#player_two_score');
let winningScore = document.querySelector('#scoreLimit');
let p1_score = 0;
let p2_score = 0;
let isGameOver = false;
scoreLimit.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})
playerOne.addEventListener('click', function () {
    if (!isGameOver) {
        if (winningScore > 0) {
            p1_score++;
            if (p1_score === winningScore) {
                isGameOver = true;
                player_one_scores.classList.add('winner');
                player_two_scores.classList.add('loser');
            }
            player_one_scores.innerText = p1_score;
        } else {
            alert("your winning score must be greater than zero")
        }
    }

})

playerTwo.addEventListener('click', function () {
    if (!isGameOver) {
        if (winningScore > 0) {
            p2_score++;
            if (p2_score === winningScore) {
                isGameOver = true;
                player_two_scores.classList.add('winner');
                player_one_scores.classList.add('loser');
            }
            player_two_scores.innerText = p2_score;
        } else {
            alert("Your winning score must be greater than zero")
        }

    }
})
reset_score.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1_score = 0;
    p2_score = 0;
    player_one_scores.innerText = 0;
    player_two_scores.innerText = 0;
    player_two_scores.classList.remove('winner', 'loser');
    player_one_scores.classList.remove('loser', 'winner');
}