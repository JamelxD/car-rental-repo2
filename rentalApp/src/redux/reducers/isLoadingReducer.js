const initialState = { loader: false }
const isLoadingReducer = (state = initialState, action) => {
    if (action.type === 'IS_LOADING') {
        let newLoader = action.payload
        return {
            ...state,
            loader: newLoader
        }
    } else {
        return state
    }
}
export default isLoadingReducer