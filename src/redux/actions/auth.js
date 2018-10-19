export const login = (user_role) => {
    return {
        type: 'LOGIN',
        user_role: user_role
    };
};
 
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
 
export const signup = (username, password) => {
    return (dispatch) => {
    };
};
