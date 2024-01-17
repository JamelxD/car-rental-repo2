const initialState = { date: '' }
const dateReducer = (state = initialState, action) => {
    if (action.type === 'STORE_PICKUP_DATE') {
        let newPickupDate = action.payload
        return {
            ...state,
            date: newPickupDate
        }
    } else {
        return state
    }
}
export default dateReducer;