export const login = (credentials) => (dispatch) => {
    const users = [{
        username: "oscmarin",
        password: "admin123"
    }];
    const user = users.find((user) => user.username === credentials.username && user.password === credentials.password);
    if (user) {
        dispatch ({ type: 'LOGIN_SUCCESS', payload: credentials.username });
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: 'Invalid username or password' });
      }
};

export const logout = () => {
    return { type: 'LOGOUT' };
};