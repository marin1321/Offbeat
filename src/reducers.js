import { LOGIN_SUCCESS, LOGOUT, CHECK_AUTH_STATUS } from './actions';

const initialState = {
    isLoggedIn: false,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case CHECK_AUTH_STATUS:
            return state;
        default:
            return state;
    }
}

export default authReducer;
