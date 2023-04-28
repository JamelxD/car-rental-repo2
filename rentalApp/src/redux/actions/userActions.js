export const registerUser = (details) => {
    return {
        type: 'REGISTER_USER',
        payload: details
    }
}

export const loginUser = (details) => {
    return {
        type: 'LOGIN_USER',
        payload: details
    }
}