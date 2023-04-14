const initialState = { pickupLocation: {} }
const locationReducer = (state = initialState, action) => {
    if (action.type === 'STORE_PICKUP_LOCATION') {
        let newPickupLocation = action.payload
        return {
            ...state,
            pickupLocation: newPickupLocation
        }
    } else {
        return state
    }
}
export default locationReducer