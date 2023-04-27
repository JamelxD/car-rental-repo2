const initialState = { rental: {}, plate: '' }
const storeRentalReducer = (state = initialState, action) => {
    if (action.type === 'STORE_RENTAL') {
        let newRental = action.payload
        return {
            ...state,
            rental: newRental
        }
    } else if (action.type === 'STORE_PLATE') {
        let newPlate = action.payload
        return {
            ...state,
            plate: newPlate
        }
    } else {
        return state
    }
}
export default storeRentalReducer