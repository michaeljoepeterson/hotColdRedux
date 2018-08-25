export const restart_game = "restart_game";
export const restartGame = () => ({
	type:restart_game,
	guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const make_guess = "make_guess";
export const makeGuess = (guess) => ({
	type:make_guess,
	guess
});