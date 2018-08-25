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
		
	}

	return state;
};
