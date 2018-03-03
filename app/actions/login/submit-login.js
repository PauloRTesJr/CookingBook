import {actions} from "../../constants";

export const submitLogin = ({email, password}) =>  (
    (dispatch: Function) => {
        console.log(email, password);
        return dispatch(({
            type: actions.login.submit
        }));
    }
);
