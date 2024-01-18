export const storeCars = (carsArray) => {
    return {
        type: 'STORE_CARS',
        payload: carsArray
    }
}

export const clearCars = () => {
    return {
        type: 'CLEAR_CARS'
    }
}