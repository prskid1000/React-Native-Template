import { createStore , combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const initialState = {
    name: ""
  };

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

const rootReducer = persistReducer(persistConfig, combineReducers(reducers))
const store = createStore(rootReducer , initialState, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor}
