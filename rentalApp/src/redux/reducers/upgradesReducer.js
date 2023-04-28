const initialState = {
    mileage: 'basic-mileage',
    protection: 'basic-protection',
    additionalDrivers: 0,
    gps: false,
    roadsideAssistance: false,
    interiorDamage: false,
    childSeat: false,
    tireProtection: false,
    toddlerSeat: false,
    infantSeat: false,
    toll: false,
    upgradesTotal: 0
}

const upgradesReducer = (state = initialState, action) => {
    if (action.type === 'SET_MILEAGE') {
        let newMileage = action.payload
        return {
            ...state,
            mileage: newMileage.val,
            upgradesTotal: state.upgradesTotal + newMileage.cost
        }
    } else if (action.type === 'SET_PROTECTION') {
        let newProtection = action.payload
        return {
            ...state,
            protection: newProtection.val,
            upgradesTotal: state.upgradesTotal + newProtection.cost
        }
    } else if (action.type === 'INCREMENT_DRIVERS') {
        if (state.additionalDrivers == 5) {
            return {
                ...state
            }
        } else {
            let newAdditionalDrivers = action.payload
            return {
                ...state,
                additionalDrivers: ++state.additionalDrivers,
                upgradesTotal: state.upgradesTotal + newAdditionalDrivers
            }
        }
    } else if (action.type === 'DECREMENT_DRIVERS') {
        if (state.additionalDrivers == 0) {
            return {
                ...state
            }
        } else {
            let newAdditionalDrivers = action.payload
            return {
                ...state,
                additionalDrivers: --state.additionalDrivers,
                upgradesTotal: state.upgradesTotal - newAdditionalDrivers
            }
        }
    } else if (action.type === 'SET_GPS') {
        let newGPS = action.payload
        return {
            ...state,
            gps: !state.gps,
            upgradesTotal: state.upgradesTotal + newGPS
        }
    } else if (action.type === 'SET_ROADSIDE_ASSISTANCE') {
        let newRoadsideAssistance = action.payload
        return {
            ...state,
            roadsideAssistance: !state.roadsideAssistance,
            upgradesTotal: state.upgradesTotal + newRoadsideAssistance
        }
    } else if (action.type === 'SET_INTERIOR_DAMAGE') {
        let newInteriorDamage = action.payload
        return {
            ...state,
            interiorDamage: !state.interiorDamage,
            upgradesTotal: state.upgradesTotal + newInteriorDamage
        }
    } else if (action.type === 'SET_CHILD_SEAT') {
        let newChildSeat = action.payload
        return {
            ...state,
            childSeat: !state.childSeat,
            upgradesTotal: state.upgradesTotal + newChildSeat
        }
    } else if (action.type === 'SET_TIRE_PROTECTION') {
        let newTireProtection = action.payload
        return {
            ...state,
            tireProtection: !state.tireProtection,
            upgradesTotal: state.upgradesTotal + newTireProtection
        }
    } else if (action.type === 'SET_TODDLER_SEAT') {
        let newToddlerSeat = action.payload
        return {
            ...state,
            toddlerSeat: !state.toddlerSeat,
            upgradesTotal: state.upgradesTotal + newToddlerSeat
        }
    } else if (action.type === 'SET_INFANT_SEAT') {
        let newInfantSeat = action.payload
        return {
            ...state,
            infantSeat: !state.infantSeat,
            upgradesTotal: state.upgradesTotal + newInfantSeat
        }
    } else if (action.type === 'SET_TOLL') {
        let newToll = action.payload
        return {
            ...state,
            toll: !state.toll,
            upgradesTotal: state.upgradesTotal + newToll
        }
    } else {
        return state
    }
}
export default upgradesReducer