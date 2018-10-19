const defaultState = {
    isLoggedIn: false,
    isRenderLogin: false,
    user_role: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return Object.assign({}, state, { 
                isLoggedIn: true,
                isRenderLogin: false,
                user_role: action.user_role
            });
        case 'LOGOUT':
            return Object.assign({}, state, { 
                isLoggedIn: false,
                isRenderLogin: true,
                user_role: '',
            });
        default:
            return state;
    }
}