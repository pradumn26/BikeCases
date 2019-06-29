import {combineReducers} from 'redux';

import auth from './authReducer';

let combinedReducer = combineReducers({
    auth
});

export default combinedReducer;