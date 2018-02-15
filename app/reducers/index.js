import { combineReducers } from 'redux';
import loginReducer from './login-reducer';

// Root Reducer
const rootReducer = combineReducers({
    login: loginReducer,
});

export default rootReducer;