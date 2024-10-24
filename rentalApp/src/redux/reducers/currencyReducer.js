const initialState = { currency: "$", conversion: 1 }
const currencyReducer = (state = initialState, action) => {
    if (action.type === 'TO_USD') {
        return {
            ...state,
            currency: '$',
            conversion: 1
        }
    } else if (action.type === 'TO_GBP') {
        return {
            ...state,
            currency: '£',
            conversion: 0.8
        }
    } else if (action.type === 'TO_EUR') {
        return {
            ...state,
            currency: '€',
            conversion: 0.94
        }
    } else if (action.type ==='TO_AUD') {
        return {
            ...state,
            currency: 'A$',
            conversion: 1.51
        }
    } else {
        return state
    }
}
export default currencyReducer;