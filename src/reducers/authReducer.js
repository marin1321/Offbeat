const authReducer = (state = { user: null, error: null }, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload, error: null };
        case 'LOGIN_ERROR':
            return { ...state, error: action.payload };
        case 'LOGOUT':
            return { ...state, user: null, error: null };
        default:
            return state;
    }
};

export default authReducer;
