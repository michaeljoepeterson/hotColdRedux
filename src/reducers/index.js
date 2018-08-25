import * as actions from '../actions/index';

const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const guessGameReducer = (state=initialState, action) =>{
	if(action.type === actions.restart_game){
		console.log("restarting game")
		return Object.assign({},state,{
			guesses:action.guesses,
			feedback:action.feedback,
			auralStatus:action.auralStatus,
			correctAnswer:action.correctAnswer
		});
	}
	else if (action.type === actions.make_guess){
		console.log("make guess");
		console.log(state);
		console.log(state.correctAnswer);
		const guess = parseInt(action.guess,10);
		if(isNaN(guess)){
			return Object.assign({},state,{
				feedback:"Enter a valid number"
			})
		}
		if(state.guesses.includes(guess)){
			return Object.assign({},state,{
				feedback:"You guessed that number already"
			})
		}
      	const difference = Math.abs(guess - state.correctAnswer);
      	let feedback;
	    if (difference >= 50) {
	      feedback = 'You\'re Ice Cold...';
	    } else if (difference >= 30) {
	      feedback = 'You\'re Cold...';
	    } else if (difference >= 10) {
	      feedback = 'You\'re Warm.';
	    } else if (difference >= 1) {
	      feedback = 'You\'re Hot!';
	    } else {
	      feedback = 'You got it!';
	    }
	    return Object.assign({},state,{
	    	feedback:feedback,
	    	guesses:[...state.guesses,guess]
	    });

	}

	return state;
};
