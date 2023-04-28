const initialState = { pickupLocation: '', dropOffLocation: '' }
const locationReducer = (state = initialState, action) => {
    if (action.type === 'STORE_PICKUP_LOCATION') {
        let newPickupLocation = action.payload
        return {
            ...state,
            pickupLocation: newPickupLocation
        }
    } else if (action.type === 'STORE_DROPOFF_LOCATION') {
        let newDropoffLocation = action.payload
        return {
            ...state,
            dropOffLocation: newDropoffLocation
        }
    } else {
        return state
    }
}
export default locationReducer