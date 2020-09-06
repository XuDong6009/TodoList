import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
};

const myPersistReducer = persistReducer(persistConfig, reducers)

const store = createStore(myPersistReducer,composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
export default store