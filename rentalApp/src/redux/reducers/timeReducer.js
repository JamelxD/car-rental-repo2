const initialState = { times: '' }
const timeReducer = (state = initialState, action) => {
    if (action.type === 'STORE_TIMES') {
        let newTimes = action.payload
        return {
            ...state,
            times: newTimes
        }
    } else {
        return state
    }
}
export default timeReducer;