import {actions} from "../../constants";

export const submitLogin = ({email, password}) => (
    (dispatch: Function) => {
        dispatch(() => ({
            type: actions.login.submit,
            payload: { isSubmitting: true }
        }));
        console.log(email, password);
        return promiseLogin
            .then((login) => dispatch(() => {

            }))
            .catch(() => console.log("Login error"));
    }
);

let promiseLogin = new Promise((resolve) => {
    resolve(true);
});