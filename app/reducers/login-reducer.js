const initialState = {
    email: "teste@teste.com",
    password: "12345"
};

export const getLogin = (state: Object) => ({ ...state.login });

const loginReducer = (state: Object = initialState, action: Object) => {
    switch (action.type) {
        // case FETCH_DATA_SUCCESS: {
        //     return {
        //         isLoading: false,
        //         error: false,
        //         weatherInfo: action.payload.weatherInfo,
        //     };
        // }
        default: {
            return state;
        }
    }
};

export default loginReducer;