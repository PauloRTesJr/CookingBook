import {actions} from "../constants";

const initialState = {
    isSubmitting: false,
    isLoggedIn: false
};

export const getLogin = (state: Object) => ({ ...state.login });

const loginReducer = (state: Object = initialState, action: Object) => {
    switch (action.type) {
        case actions.login.submit: {
            console.log("reducer submit");
            return {
                ...state, isSubmitting: true
            };
        }
        default: {
            return state;
        }
    }
};

export default loginReducer;