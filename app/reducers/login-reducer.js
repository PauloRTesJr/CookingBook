import {actions} from "../constants";

const initialState = {
    email: "asd",
    password: "asd"
};

export const getLogin = (state: Object) => ({ ...state.login });

const loginReducer = (state: Object = initialState, action: Object) => {
    switch (action.type) {
        case actions.login.submit: {
            return {
                isLoading: true
            };
        }
        default: {
            return state;
        }
    }
};

export default loginReducer;