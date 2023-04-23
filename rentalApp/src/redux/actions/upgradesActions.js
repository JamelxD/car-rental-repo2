export const setMileage = (option) => {
    return {
        type: 'SET_MILEAGE',
        payload: option
    }
}

export const setProtection = (option) => {
    return {
        type: 'SET_PROTECTION',
        payload: option
    }
}

export const incrementDrivers = (value) => {
    return {
        type: 'INCREMENT_DRIVERS',
        payload: value
    }
}

export const decrementDrivers = (value) => {
    return {
        type: 'DECREMENT_DRIVERS',
        payload: value
    }
}

export const setGPS = (value) => {
    return {
        type: 'SET_GPS',
        payload: value
    }
}

export const setRoadsideAssistance = (value) => {
    return {
        type: 'SET_ROADSIDE_ASSISTANCE',
        payload: value
    }
}

export const setInteriorDamage = (value) => {
    return {
        type: 'SET_INTERIOR_DAMAGE',
        payload: value
    }
}

export const setChildSeat = (value) => {
    return {
        type: 'SET_CHILD_SEAT',
        payload: value
    }
}

export const setTireProtection = (value) => {
    return {
        type: 'SET_TIRE_PROTECTION',
        payload: value
    }
}