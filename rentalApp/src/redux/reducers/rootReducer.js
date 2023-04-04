import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import storeCarsReducer from './storeCarsReducer';
import storeRentalReducer from './storeRentalReducer';
import isLoadingReducer from './isLoadingReducer';
const rootReducer = combineReducers({
    storeCarsReducer: storeCarsReducer,
    storeRentalReducer: storeRentalReducer,
    isLoadingReducer: isLoadingReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer;