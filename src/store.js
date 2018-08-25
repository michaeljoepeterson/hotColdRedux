import {createStore} from 'redux';

import {guessGameReducer} from './reducers/index';
export default createStore(guessGameReducer);