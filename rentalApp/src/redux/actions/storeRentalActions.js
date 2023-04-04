export const storeRental = (car) => {
    return {
        type: 'STORE_RENTAL',
        payload: car
    }
}