const initialState = { rental: {} }
const storeRentalReducer = (state = initialState, action) => {
    if (action.type === 'STORE_RENTAL') {
        let newRental = action.payload
        return {
            ...state,
            rental: newRental
        }
    } else {
        return state
    }
}
export default storeRentalReducer