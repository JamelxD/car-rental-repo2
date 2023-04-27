export const storeRental = (car) => {
    return {
        type: 'STORE_RENTAL',
        payload: car
    }
}

export const storePlate = (plate) => {
    return {
        type: 'STORE_PLATE',
        payload: plate
    }
}