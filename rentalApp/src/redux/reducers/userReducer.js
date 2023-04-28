const initialState = { register: [], login: false }
const userReducer = (state = initialState, action) => {
    if (action.type === 'REGISTER_USER') {
        let newRegister = action.payload
        return {
            ...state,
            register: [...state.register, newRegister]
        }
    } else if (action.type === 'LOGIN_USER') {
        let newLogin = action.payload
        return {
            ...state,
            login: newLogin
        }
    } else {
        return state
    }
}
export default userReducer