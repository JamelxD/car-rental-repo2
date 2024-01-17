import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import storeCarsReducer from './storeCarsReducer';
import storeRentalReducer from './storeRentalReducer';
import isLoadingReducer from './isLoadingReducer';
import locationReducer from './locationReducer';
import upgradesReducer from './upgradesReducer';
import userReducer from './userReducer';
import dateReducer from './dateReducer';

const rootReducer = combineReducers({
    storeCarsReducer: storeCarsReducer,
    storeRentalReducer: storeRentalReducer,
    isLoadingReducer: isLoadingReducer,
    locationReducer: locationReducer,
    upgradesReducer: upgradesReducer,
    userReducer: userReducer,
    dateReducer: dateReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['locationReducer', 'upgradesReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer;