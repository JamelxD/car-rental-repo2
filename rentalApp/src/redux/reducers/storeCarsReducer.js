const initialState = { carsData: {} }
const storeCarsReducer = (state = initialState, action) => {
    if (action.type === 'STORE_CARS') {
        let newCarsData = action.payload
        return {
            ...state,
            carsData: newCarsData
        }
    } else if (action.type === 'CLEAR_CARS') {
        let newCarsData = {}
        return {
            ...state,
            carsData: newCarsData
        }
    } else {
        return state
    }
}
export default storeCarsReducer;