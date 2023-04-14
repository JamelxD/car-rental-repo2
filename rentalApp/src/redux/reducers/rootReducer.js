import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import storeCarsReducer from './storeCarsReducer';
import storeRentalReducer from './storeRentalReducer';
import isLoadingReducer from './isLoadingReducer';
import locationReducer from './locationReducer';
const rootReducer = combineReducers({
    storeCarsReducer: storeCarsReducer,
    storeRentalReducer: storeRentalReducer,
    isLoadingReducer: isLoadingReducer,
    locationReducer: locationReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['locationReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer;